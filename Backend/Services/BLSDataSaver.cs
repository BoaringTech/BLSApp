using Serilog;

namespace BLSApp.API.Services
{
    /// <summary>
    /// Class to save data under the "BLS Data" folder". This meant for data fetched through the BLS API.
    /// </summary>
    public class BLSDataSaver
    {
        private static readonly string _filePath = "C:\\Repositories\\BLSApp\\BLS Data";

        /// <summary>
        /// Saves content under the designated file name in the "BLS Data" folder.
        /// </summary>
        /// <param name="content">The content of the file to be saved.</param>
        /// <param name="fileName">The filename to save it under.</param>
        public static void SaveAsJsonFile(string content, string fileName)
        {
            string fullPath = Path.Combine(_filePath, fileName + ".json");
            File.WriteAllText(fullPath, content);
        }
    }
}
