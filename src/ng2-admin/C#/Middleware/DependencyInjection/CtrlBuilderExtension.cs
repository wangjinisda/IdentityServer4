
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using ng2_admin.C_.Middleware.Interface;
using ng2_admin.C_.Middleware.Services;
using ng2_admin.C_.Middleware.Model;

namespace ng2_admin.C_.Middleware.DependencyInjection
{
    public static class CtrlBuilderExtension
    {
        public static ICtrlBuilder AddBuilder(this IServiceCollection builder)
        {
            return new CtrlBuilder(builder);
        }

        public static ICtrlBuilder AddCtrlServices(this IServiceCollection service)
        {
            var builder = service.AddBuilder();
            builder.AddCtrlRouter();

            builder.AddCtrl<LoginCtrlProcessor>(CtrlAction.LoginAction);
            builder.AddCtrl<ConsentCtrlProcessor>(CtrlAction.ConsentAction);
            builder.AddCtrl<LogoutCtrlProcessor>(CtrlAction.LogoutAction);

            return builder;
        }
    }
}
