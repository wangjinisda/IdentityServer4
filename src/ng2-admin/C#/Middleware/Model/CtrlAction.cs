using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ng2_admin.C_.Middleware.Model
{
    /// <summary>
    /// controllers that Identity ServerCtrl Middleware will process
    /// </summary>
    public enum CtrlAction
    {
        LoginAction,
        ConsentAction,
        LogoutAction
    }
}
