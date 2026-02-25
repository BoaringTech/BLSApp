using System.Text.Json;

namespace BLSApp.API.Services
{
    /// <summary>
    /// Class to parse JSONs.
    /// </summary>
    public static class JsonParser
    {
        /// <summary>
        /// Parses the "Results" of a Json Response as a string.
        /// </summary>
        /// <param name="jsonString">The Json Reponse.</param>
        /// <returns>The Results in string format.</returns>
        public static string ParseResultFromJsonResponse(string jsonString)
        {
            if(jsonString == null)
            {
                return string.Empty;
            }

            using JsonDocument jsonDocument = JsonDocument.Parse(jsonString);
            JsonElement root = jsonDocument.RootElement;

            if(root.TryGetProperty("Results", out JsonElement results))
            {
                return results.GetRawText();
            }

            return string.Empty;
        }
    }
}
