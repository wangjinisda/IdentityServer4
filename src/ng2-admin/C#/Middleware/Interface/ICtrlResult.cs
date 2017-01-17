using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace ng2_admin.C_.Middleware.Interface
{
    public interface ICtrlResult
    {
        Task ExecuteAsync(HttpContext context);
    }
}
