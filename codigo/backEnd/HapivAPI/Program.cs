using Asp.Versioning;
using HapivAPI.Agents;
using HapivAPI.Domain.Context;
using HapivAPI.Domain.Repositorys;
using HapivAPI.Domain.Repositorys.BaseRepository;
using HapivAPI.Exceptions.MiddlewareException;
using HapivAPI.Interfaces.Agents;
using HapivAPI.Interfaces.Repositorys;
using HapivAPI.Interfaces.Services;
using HapivAPI.Services;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;

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
            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

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
            services.AddScoped<IProdutoService, ProdutoService>();
            services.AddScoped<IUsuarioService, UsuarioService>();
            services.AddScoped<IVendaProdutoRepository, VendaProdutoRepository>();
            services.AddScoped<IVendaService, VendasService>();

            services.AddCors(options =>
            {
                options.AddPolicy("Frontend",
                builder => builder.WithOrigins("http://localhost:3000") // substitua pelo domínio do seu front-end
                                   .AllowAnyHeader()
                                   .AllowAnyMethod());
            });

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
            app.UseCors("Frontend");
            app.UseHttpsRedirection();
            // app.UseAuthentication(); Pesquisar mais depois
            app.UseAuthorization();
            app.MapControllers();
            app.Run();
        }
    }
}