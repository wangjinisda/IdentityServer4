
using Microsoft.AspNetCore.Http;

namespace ng2_admin.C_.Middleware.Interface
{
    public interface ICtrlRouter
    {
        ICtrlProcessor Find(HttpContext context);
    }
}
