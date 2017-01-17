using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using App.Web.IdentityServer4;
using IdentityServer4.Validation;
using ng2_admin.C_.Middleware.DependencyInjection;
using ng2_admin.C_.Middleware;

namespace App.Web
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            // configure identity server with in-memory stores, keys, clients and scopes
            services.AddIdentityServer(options =>
                {
                    options.UserInteraction.LoginUrl = UIConstantsExtesions.DefaultRoutePathsCustom.Login;
                    options.UserInteraction.LogoutUrl = UIConstantsExtesions.DefaultRoutePathsCustom.Logout;
                    //options.Authentication.FederatedSignOutPaths.Add("/signout-callback-idsrv3");
                })
            .AddInMemoryClients(Clients.Get())
            .AddInMemoryIdentityResources(Resources.GetIdentityResources())
            .AddInMemoryApiResources(Resources.GetApiResources())
            .AddTemporarySigningCredential()
            .AddExtensionGrantValidator<ExtensionGrantValidatorCustom>()
            .AddSecretParser<ClientAssertionSecretParser>()
            .AddSecretValidator<PrivateKeyJwtSecretValidator>()
            .AddTestUsers(TestUsers.Users);

            services.AddCtrlServices();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseIdentityServer();

            app.UseCtrlServer();

            app.UseDefaultFiles();

            app.UseStaticFiles();

            app.Run(async (context) =>
            {
                await context.Response.WriteAsync("Hello World!");
            });
        }
    }
}
