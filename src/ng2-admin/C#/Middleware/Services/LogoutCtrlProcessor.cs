
using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using ng2_admin.C_.Middleware.Interface;
using ng2_admin.C_.Middleware.Abstract;

namespace ng2_admin.C_.Middleware.Services
{
    public class LogoutCtrlProcessor : BaseProcessor
    {
        private readonly ILogger _logger;

        public LogoutCtrlProcessor(ILogger<LoginCtrlProcessor> logger)
        {
            _logger = logger;
        }

        public override Task<ICtrlResult> ProcessAsync()
        {
            return null;
        }
    }
}
