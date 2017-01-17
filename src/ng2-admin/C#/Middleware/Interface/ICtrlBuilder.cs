
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

namespace ng2_admin.C_.Middleware.Interface
{
    public interface ICtrlBuilder
    {
        IServiceCollection service { get; set; }
    }
}
