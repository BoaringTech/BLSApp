namespace BLSApp.API.EndPoints
{
    public static class AllEndPoints
    {
        public static void MapAllEndpoints(this IEndpointRouteBuilder routes)
        {
            // Map all endpoint groups
            routes.MapDataEndPoints();
            routes.MapWeatherEndpoints();
            routes.MapFetchEndPoints();
        }
    }
}
