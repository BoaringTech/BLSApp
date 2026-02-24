using System.Net.Http.Headers;

namespace BLSApp.API.BLS_Access
{
    public class BLSRequester
    {
        public async void Fetch()
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

    
