using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ng2_admin.C_.Middleware.Model
{
    internal static class Constants
    {
        public static Dictionary<string, CtrlAction> mappingToAction = new Dictionary<string, CtrlAction>
        {
            {ApiUrlConstants.LoginAction, CtrlAction.LoginAction},
            {ApiUrlConstants.ConsentAction, CtrlAction.ConsentAction},
            {ApiUrlConstants.LogoutAction, CtrlAction.LogoutAction},
        };

    }
}
