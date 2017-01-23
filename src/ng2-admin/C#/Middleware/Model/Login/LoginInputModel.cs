using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ng2_admin.C_.Middleware.Model.Login
{
    public class LoginInputModel
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public bool RememberLogin { get; set; }
        public string ReturnUrl { get; set; }
    }
}
