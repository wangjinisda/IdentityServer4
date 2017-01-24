using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Authentication;
using Microsoft.Extensions.Logging;
using App.Web.IdentityServer4;
using IdentityServer4.Services;
using IdentityServer4.Test;
using ng2_admin.C_.Middleware.Interface;
using ng2_admin.C_.Middleware.Model.Login;
using ng2_admin.C_.Middleware.Services.Account;
using Newtonsoft.Json;
using IdentityServer4.Stores;
using ng2_admin.C_.Middleware.Abstract;

namespace ng2_admin.C_.Middleware.Services
{
    /// <summary>
    /// use this Processor when url is '/LoginAction/'
    /// </summary>
    public class LoginCtrlProcessor : BaseProcessor
    {
        private readonly ILogger _logger;
        private readonly TestUserStore _users;
        private readonly IIdentityServerInteractionService _interaction;
        private readonly ModelService _account;

        public LoginCtrlProcessor(
            ILogger<LoginCtrlProcessor> logger,
            IClientStore clientStore,
            IIdentityServerInteractionService interaction,
            TestUserStore users)
        {
            _logger = logger;
            _users = users ?? new TestUserStore(TestUsers.Users);
            _interaction = interaction;
            _account = new ModelService(interaction, clientStore);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        /// <returns></returns>
        public override async Task<ICtrlResult> ProcessAsync()
        {
            if (this.CurrentContext.Request.Method == "POST")
            {
                return await LoginWithPostWay();
            }
            else if (this.CurrentContext.Request.Method == "GET")
            {
                return await LoginWithGetWay();
            }

            return null;
        }

        /// <summary>
        /// do some validation and 
        ///  will use it later: http://stackoverflow.com/questions/14801021/what-can-cause-a-cookie-not-to-be-set-on-the-client
        /// </summary>
        /// <param name="context"></param>
        /// <returns></returns>
        internal async Task<ICtrlResult> LoginWithPostWay()
        {
            var context = this.CurrentContext;
            using (var reader =  new StreamReader(context.Request.Body))
            {
                var jsonStr = reader.ReadToEnd();
                var loginModel = JsonConvert.DeserializeObject<LoginInputModel>(jsonStr);

                // validate username/password against in-memory store
                if (_users.ValidateCredentials(loginModel.Username, loginModel.Password))
                {
                    AuthenticationProperties props = null;
                    // only set explicit expiration here if persistent. 
                    // otherwise we reply upon expiration configured in cookie middleware.
                    if (AccountOptions.AllowRememberLogin && loginModel.RememberLogin)
                    {
                        props = new AuthenticationProperties
                        {
                            IsPersistent = true,
                            ExpiresUtc = DateTimeOffset.UtcNow.Add(AccountOptions.RememberMeLoginDuration)
                        };
                    }

                    // issue authentication cookie with subject ID and username
                    var user = _users.FindByUsername(loginModel.Username);
                    await context.Authentication.SignInAsync(user.SubjectId, user.Username, props);

                    // make sure the returnUrl is still valid, and if yes - redirect back to authorize endpoint
                    if (!_interaction.IsValidReturnUrl(loginModel.ReturnUrl))
                    {
                        loginModel.ReturnUrl = "";
                    }
                    
                    return await CtrlView(loginModel);
                }

                var vm = await _account.BuildLoginViewModelAsync(loginModel.ReturnUrl, context);
                await context.Response.WriteJsonAsync(vm);
                return null;
            }
        }

        /// <summary>
        /// will not run into this functin 
        /// </summary>
        /// <param name="context"></param>
        /// <returns></returns>
        internal async Task<ICtrlResult> LoginWithGetWay()
        {
            var context = this.CurrentContext;

            return null;
        }

    }
}
