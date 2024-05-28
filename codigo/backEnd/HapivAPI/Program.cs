using Asp.Versioning;
using HapivAPI.Context;
using HapivAPI.Controllers;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using HapivAPI.Exceptions.MiddlewareException;

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