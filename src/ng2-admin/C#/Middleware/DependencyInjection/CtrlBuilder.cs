using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using ng2_admin.C_.Middleware.Interface;

namespace ng2_admin.C_.Middleware.DependencyInjection
{
    public class CtrlBuilder : ICtrlBuilder
    {
        public CtrlBuilder(IServiceCollection ser)
        {
            service = ser;
        }

        public IServiceCollection service
        {
            get;
            set;
        }
    }
}
