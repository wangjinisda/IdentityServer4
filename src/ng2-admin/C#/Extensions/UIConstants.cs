using IdentityModel;
using IdentityServer4.Hosting;
using IdentityServer4.Models;
using System;
using System.Collections.Generic;

namespace App.Web.IdentityServer4
{
    public static class UIConstantsExtesions
    {
        public static class DefaultRoutePathsCustom
        {
            public const string Login = "/#/login";
            public const string Logout = "/#/logout";
            public const string Consent = "/consent";
            public const string Error = "/home/error";
        }
    }
}
