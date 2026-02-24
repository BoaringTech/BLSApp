using Serilog;

namespace BLSApp.API.Services
{
    /// <summary>
    /// Class for logging everything in the appicaiton.
    /// </summary>
    public static class AppLogger
    {
        private static Serilog.Core.Logger? _logger;
        public static Serilog.Core.Logger Logger
        {
            get 
            {
                if(_logger == null)
                {
                    _logger = CreateLogger();
                }

                return _logger;
            }
        }

        private static Serilog.Core.Logger CreateLogger()
        {
            return new LoggerConfiguration().WriteTo
            .File("C:\\Repositories\\BLSApp\\Logs\\log.txt",
            rollingInterval: RollingInterval.Day,
            retainedFileCountLimit: null)
            .CreateLogger();
        }
    }
}
