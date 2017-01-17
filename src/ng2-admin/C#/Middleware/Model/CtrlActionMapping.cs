using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ng2_admin.C_.Middleware.Model
{
    public class CtrlActionMapping
    {
        public CtrlAction CtrlAction { get; set; }
        public Type Handler { get; set; }
    }
}
