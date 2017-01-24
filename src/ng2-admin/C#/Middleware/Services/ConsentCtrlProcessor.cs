using System.IO;
using System.Threading.Tasks;
using IdentityServer4.Services;
using IdentityServer4.Stores;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using ng2_admin.C_.Middleware.Services.Account;
using ng2_admin.C_.Middleware.Interface;
using ng2_admin.C_.Middleware.Model.Consent;
using Newtonsoft.Json;
using ng2_admin.C_.Middleware.Abstract;

namespace ng2_admin.C_.Middleware.Services
{
    /// <summary>
    /// consent when login successful
    /// </summary>
    public class ConsentCtrlProcessor : BaseProcessor
    {
        private readonly ILogger _logger;
        private readonly ConsentService _consent;

        public ConsentCtrlProcessor(
            IIdentityServerInteractionService interaction,
            IClientStore clientStore,
            IResourceStore resourceStore,
            ILogger<ConsentCtrlProcessor> logger)
        {
            _logger = logger;
            _consent = new ConsentService(interaction, clientStore, resourceStore, logger);
        }

        internal async Task<ICtrlResult> ConsentWithPostWay()
        {
            var context = this.CurrentContext;
            using (var reader = new StreamReader(context.Request.Body))
            {
                var jsonStr = reader.ReadToEnd();
                var consentLoginModel = JsonConvert.DeserializeObject<ConsentInputModel>(jsonStr);
                var vm = await _consent.BuildViewModelAsync(consentLoginModel.ReturnUrl);
                await context.Response.WriteJsonAsync(vm);
            }
                
            return null;
        }

        internal async Task<ICtrlResult> ConsentWithGetWay()
        {
            var context = this.CurrentContext;
            using (var reader = new StreamReader(context.Request.Body))
            {
                var jsonStr = reader.ReadToEnd();
                var consentLoginModel = JsonConvert.DeserializeObject<ConsentInputModel>(jsonStr);
                var result = await _consent.ProcessConsent(consentLoginModel);

                if (result.IsRedirect)
                {
                    context.Response.Redirect(result.RedirectUri);
                }

                if (result.HasValidationError)
                {                
                    await context.Response.WriteJsonAsync(result.ValidationError);
                }

                if (result.ShowView)
                {
                    await context.Response.WriteJsonAsync(result.ViewModel);
                }
            }

            return null;
        }

        /// <summary>
        /// route to specific func. base on request type
        /// </summary>
        /// <returns></returns>
        public override async Task<ICtrlResult> ProcessAsync()
        {
            if (this.CurrentContext.Request.Method == "POST")
            {
                return await ConsentWithPostWay();
            }
            else if (this.CurrentContext.Request.Method == "GET")
            {
                return await ConsentWithGetWay();
            }

            return null;
        }
    }
}
