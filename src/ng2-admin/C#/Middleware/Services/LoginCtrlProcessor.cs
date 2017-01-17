using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using App.Web.IdentityServer4;
using IdentityServer4.Test;
using ng2_admin.C_.Middleware.Interface;

namespace ng2_admin.C_.Middleware.Services
{
    /// <summary>
    /// use this Processor when url is '/LoginAction/'
    /// </summary>
    public class LoginCtrlProcessor : ICtrlProcessor
    {
        private readonly ILogger _logger;
        private readonly TestUserStore _users;

        public LoginCtrlProcessor(
            ILogger<LoginCtrlProcessor> logger,
            TestUserStore users)
        {
            _logger = logger;
            _users = users ?? new TestUserStore(TestUsers.Users);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        /// <returns></returns>
        async Task<ICtrlResult> ICtrlProcessor.ProcessAsync(HttpContext context)
        {
            if (context.Request.Method == "POST")
            {
                return await LoginWithPostWay(context);
            }
            else if (context.Request.Method == "GET")
            {
                return await LoginWithGetWay(context);
            }

            return null;
        }

        /// <summary>
        /// do some validation and 
        /// </summary>
        /// <param name="context"></param>
        /// <returns></returns>
        internal async Task<ICtrlResult> LoginWithPostWay(HttpContext context)
        {

            return null;
        }

        /// <summary>
        /// will not run into this functin 
        /// </summary>
        /// <param name="context"></param>
        /// <returns></returns>
        internal async Task<ICtrlResult> LoginWithGetWay(HttpContext context)
        {
            return null;
        }

    }
}
