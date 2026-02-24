using System.Net.Http.Headers;

namespace BLSApp.API.BLS_Access
{
    /// <summary>
    /// Used to fetch data using the BLS API and then stores it locally.
    /// </summary>
    public class BLSRequester
    {
        /// <summary>
        /// Calls the BLS API to fetch and store data locally.
        /// </summary>
        /// <param name="text">Argument to pass when calling the BLS API.</param>
        public async void Fetch(string text)
        {
            using HttpClient client = new();
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/vnd.github.v3+json"));
            client.DefaultRequestHeaders.Add("User-Agent", ".NET Foundation Repository Reporter");

            await ProcessRepositoriesAsync(client);
        }

        private async Task ProcessRepositoriesAsync(HttpClient client)
        {
            var json = await client.GetStringAsync("https://api.github.com/orgs/dotnet/repos");
            Console.Write(json);
        }
    }
}

    
