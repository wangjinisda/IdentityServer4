
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using ng2_admin.C_.Middleware.Model;
using ng2_admin.C_.Middleware.Interface;
using ng2_admin.C_.Middleware.Services;


namespace ng2_admin.C_.Middleware.DependencyInjection
{
    public static class CtrlBuilderServicesBind
    {
        public static ICtrlBuilder AddCtrl<T>(this ICtrlBuilder builder, CtrlAction action)
            where T : class, ICtrlProcessor
        {
            builder.service.AddTransient<T>();
            builder.service.AddSingleton(new CtrlActionMapping { CtrlAction = action, Handler=typeof(T)});

            return builder;
        }

        public static ICtrlBuilder AddCtrlRouter(this ICtrlBuilder builder)
        {
            builder.service.AddSingleton<ICtrlRouter>(resolver =>
            {
                return new CtrlRouter(Constants.mappingToAction,
                    resolver.GetServices<CtrlActionMapping>(),
                    resolver.GetRequiredService<ILogger<CtrlRouter>>());
            });

            return builder;
        }
    }
}
