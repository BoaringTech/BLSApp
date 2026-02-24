using Serilog.AspNetCore;
using Serilog.Sinks.File;
using BLSApp.API.EndPoints;
using Serilog;
using BLSApp.API.Services;

public class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.
        // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
        builder.Services.AddOpenApi();
        ConifgureFrontEndAccess(builder);

        AppLogger.Logger.Information("BLS app started!");

        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.MapOpenApi();
        }

        app.UseHttpsRedirection();
        app.MapAllEndpoints();
        app.UseCors("AllowReactApp");
        app.Run();
    }

    private static void ConifgureFrontEndAccess(WebApplicationBuilder builder)
    {
        builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowReactApp",
                builder =>
                {
                    builder.WithOrigins("http://localhost:3000") // React dev server, 3000
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                });
        });
    }
}