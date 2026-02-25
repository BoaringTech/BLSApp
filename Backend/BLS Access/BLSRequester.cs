using BLSApp.API.Services;
using System.Net.Http.Headers;
using System.Text.Json;

namespace BLSApp.API.BLS_Access
{
    /// <summary>
    /// Used to fetch data using the BLS API and then stores it locally.
    /// </summary>
    public class BLSRequester
    {
        private readonly HttpClient _httpClient;
        private readonly JsonSerializerOptions _jsonOptions;

        public BLSRequester()
        {
            _httpClient = new HttpClient();
            _httpClient.BaseAddress = new Uri("https://api.bls.gov/publicAPI/v2/");

            _jsonOptions = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true // Helps with JSON property name matching
            };
        }

        /// <summary>
        /// Calls the BLS API to fetch and store data locally.
        /// </summary>
        /// <param name="text">Argument to pass when calling the BLS API.</param>
        public async Task<string> Fetch(string text)
        {
            try
            { 
                HttpResponseMessage response = await _httpClient.GetAsync(text); // Make the GET request to the surveys endpoint
                response.EnsureSuccessStatusCode(); // Ensure the request was successful
                string jsonResponse = await response.Content.ReadAsStringAsync(); // Read the response content as a string
                BLSDataSaver.SaveAsJsonFile(JsonParser.ParseResultFromJsonResponse(jsonResponse), text); // Save the Json Response
                return jsonResponse; // For now, return the raw JSON to inspect its structure
            }
            catch (HttpRequestException ex)
            {
                // Handle any HTTP errors (e.g., network issues, non-success status codes)
                string message = $"Error calling BLS API: {ex.Message}";
                AppLogger.Logger.Error(message);
                throw new Exception(message); 
            }
        }
    }
}

    
