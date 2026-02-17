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
        string MyAllowSpecificOrigins = ConifgureFrontEndAccess(builder);

        AppLogger.Logger.Information("BLS app started!");

        var app = builder.Build();

        // Add after builder.Services
        app.UseCors(MyAllowSpecificOrigins);

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.MapOpenApi();
        }

        app.UseHttpsRedirection();
        app.MapAllEndpoints();
        app.Run();
    }

    private static string ConifgureFrontEndAccess(WebApplicationBuilder builder)
    {
        var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
        builder.Services.AddCors(options =>
        {
            options.AddPolicy(name: MyAllowSpecificOrigins,
                policy =>
                {
                    policy.WithOrigins("http://localhost:3000/") // React dev server, 3000
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                });
        });
        return MyAllowSpecificOrigins;
    }
}