using Microsoft.AspNetCore.Http;
using ng2_admin.C_.Middleware.Interface;

namespace ng2_admin.C_.Middleware.Extensions
{
    public static class CtrlProcessorExtension
    {
        public static ICtrlProcessor SetCurrentHttpConetext(this ICtrlProcessor processor, HttpContext context)
        {
            processor.CurrentContext = context;
            return processor;
        }

    }
}
