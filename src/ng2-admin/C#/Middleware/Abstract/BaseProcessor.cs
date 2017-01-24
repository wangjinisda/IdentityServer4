using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using ng2_admin.C_.Middleware.Interface;
using System;

namespace ng2_admin.C_.Middleware.Abstract
{
    public abstract class BaseProcessor : ICtrlProcessor
    {
        public virtual HttpContext CurrentContext { get; set; }

        public virtual Task<ICtrlResult> ProcessAsync()
        {
            return null;
        }

        public virtual async Task<ICtrlResult> CtrlView(Object o)
        {
            await CurrentContext.Response.WriteJsonAsync(o);
            return null;
        }

    }
}
