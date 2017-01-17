using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using ng2_admin.C_.Middleware.Interface;

namespace ng2_admin.C_.Middleware
{
    public class IdentityServerCtrlMiddleware
    {
        private readonly ILogger _logger;
        private readonly RequestDelegate _next;

        public IdentityServerCtrlMiddleware(RequestDelegate next, ILogger<IdentityServerCtrlMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task Invoke(HttpContext context, ICtrlRouter router)
        {
            try
            {
                var ctrl = router.Find(context);
                if (ctrl != null)
                {
                    await ctrl.ProcessAsync(context);
                }
            }
            catch (Exception ex)
            {
                _logger.LogCritical("Unhandled exception: {exception}", ex.ToString());
                throw;
            }

            await _next(context);
        }
    }
}
