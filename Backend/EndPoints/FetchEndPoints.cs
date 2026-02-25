using BLSApp.API.BLS_Access;

namespace BLSApp.API.EndPoints
{
    /// <summary>
    /// Maps all Endpoints used to fetch data from the BLS API.
    /// </summary>
    public static class FetchEndPoints
    {
        public static void MapFetchEndPoints(this IEndpointRouteBuilder routes)
        {
            routes.MapGet("/fetch", (string text) => TestFetch(text));
        }

        private async static Task<IResult> TestFetch(string text)
        {
            if (string.IsNullOrEmpty(text))
            {
                return Results.BadRequest("Text parameter is required");
            }

            try
            {
                await new BLSRequester().Fetch(text);
            }
            catch (Exception)
            {
                return Results.BadRequest("Failure");
            }
            
            return Results.Ok("Success");
        }
    }
}
