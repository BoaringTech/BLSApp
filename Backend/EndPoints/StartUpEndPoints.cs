namespace BLSApp.API.EndPoints
{
    public static class StartUpEndPoints
    {
        public static void MapStartUpEndPoints(this IEndpointRouteBuilder routes)
        {
            routes.MapGet("/", () => "Welcome to the API");
            routes.MapGet("/health", () => Results.Ok(new { Status = "Healthy" }));
        }
    }
}