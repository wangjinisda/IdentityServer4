
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;

namespace ng2_admin.C_.Middleware
{
    public static class AppBuilderExtension
    {
        /// <summary>
        /// IApplicationBuilder extension for IdentityServerCtrlMiddleware
        /// </summary>
        /// <param name="app"></param>
        /// <returns></returns>
        public static IApplicationBuilder UseCtrlServer(this IApplicationBuilder app)
        {
            app.UseMiddleware<IdentityServerCtrlMiddleware>();

            return app;
        }
    }
}
