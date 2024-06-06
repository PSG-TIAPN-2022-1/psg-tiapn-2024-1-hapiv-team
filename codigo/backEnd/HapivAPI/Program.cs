using Asp.Versioning;
using HapivAPI.Controllers;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using HapivAPI.Exceptions.MiddlewareException;
using HapivAPI.Domain;
using HapivAPI.Domain.Repositorys;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using HapivAPI.Domain.Repositorys.BaseRepository;
using HapivAPI.Services;
using HapivAPI.Domain.Context;
using HapivAPI.Agents;
using HapivAPI.Interfaces.Repositorys;
using HapivAPI.Interfaces.Agents;
using HapivAPI.Interfaces.Services;

namespace API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            ConfigureServices(builder.Services);

            var connectionString = builder.Configuration.GetConnectionString("Server1"); //Busco a String de conexão no appSettings.json
            
            builder.Services.AddDbContext<AppDbContext>(options =>
            options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString))); //Insere AppDbContext no container DI nativo

            var app = builder.Build();

            Configure(app);
        }

        private static void ConfigureServices(IServiceCollection services)
        {
            services.AddApiVersioning(options =>
            {
                options.DefaultApiVersion = new ApiVersion(1, 0);
                options.AssumeDefaultVersionWhenUnspecified = true;
                options.ReportApiVersions = true;
            });
            services.AddScoped(typeof(IBaseRepository<>), typeof(BaseRepository<>));
            services.AddScoped<ICategoriaRepository, CategoriaRepository>();
            services.AddScoped<IFornecedorRepository, FornecedorRepository>();
            services.AddScoped<IGastoFixoRepository, GastoFixoRepository>();
            services.AddScoped<IGerenteRepository, GerenteRepository>();
            services.AddScoped<IProdutoRepository, ProdutoRepository>();
            services.AddScoped<IVendaRepository, VendaRepository>();
            services.AddScoped<IEmailSender, EmailSender>();
            services.AddTransient<IUsuarioService, UsuarioService>();

            // Add services to the container.
            services.AddControllers();
            services.AddControllers().AddJsonOptions(options => options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();
        }

        private static void Configure(WebApplication app)
        {
            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
                });
                app.ConfigureExceptionsHandler(); //Configura middleware para mensagens de erro personalizadas em exceções não tratadas
            }

            app.UseHttpsRedirection();
            // app.UseAuthentication(); Pesquisar mais depois
            app.UseAuthorization();
            app.MapControllers();
            app.Run();
        }
    }
}