using BLSApp.API.BLS_Access;

namespace BLSApp.API.EndPoints
{
    public static class FetchEndPoints
    {
        public static void MapFetchEndPoints(this IEndpointRouteBuilder routes)
        {
            routes.MapGet("/fetch", () => TestFetch());
        }

        private static void TestFetch()
        {
            new BLSRequester().Fetch();
        }
    }
}
