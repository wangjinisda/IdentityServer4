using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using ng2_admin.C_.Middleware.Interface;

namespace ng2_admin.C_.Middleware.Services
{
    public class ConsentCtrlProcessor : ICtrlProcessor
    {
        private readonly ILogger _logger;

        public ConsentCtrlProcessor(ILogger<ConsentCtrlProcessor> logger)
        {
            _logger = logger;
        }

        Task<ICtrlResult> ICtrlProcessor.ProcessAsync(HttpContext context)
        {
            return null;
        }
    }
}
