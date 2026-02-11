using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

public static class EndpointConfiguration
{
    public static void ConfigureEndpoints(WebApplication app)
    {
        // Map all endpoint groups

        // Add global endpoint configurations
        app.MapGet("/", () => "Welcome to the API");
        app.MapGet("/health", () => Results.Ok(new { Status = "Healthy" }));
    }
}