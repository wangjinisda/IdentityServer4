using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using ng2_admin.C_.Middleware.Model;
using ng2_admin.C_.Middleware.Interface;
using ng2_admin.C_.Middleware.Extensions;

namespace ng2_admin.C_.Middleware.Services
{
    /// <summary>
    /// the function of this class is to help middleware to get right handler
    /// </summary>
    public class CtrlRouter : ICtrlRouter
    {
        private readonly Dictionary<string, CtrlAction> _pathToActionMap;
        private readonly IEnumerable<CtrlActionMapping> _mappings;
        private readonly ILogger<CtrlRouter> _logger;

        public CtrlRouter(Dictionary<string, CtrlAction> pathToActionMap, IEnumerable<CtrlActionMapping> mappings, ILogger<CtrlRouter> logger)
        {
            _pathToActionMap = pathToActionMap;
            _mappings = mappings;
            _logger = logger;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        /// <returns></returns>
        ICtrlProcessor ICtrlRouter.Find(HttpContext context)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));
            foreach(var key in _pathToActionMap.Keys)
            {
                var path = key.EnsureLeadingSlash();
                if (context.Request.Path.StartsWithSegments(path))
                {
                    var ctrlAction = _pathToActionMap[key];
                    _logger.LogDebug("Request path {path} matched to endpoint type {endpoint}", context.Request.Path, ctrlAction);
                    var mapping = _mappings.LastOrDefault(x => x.CtrlAction == ctrlAction);
                    var processor =  context.RequestServices.GetService(mapping.Handler) as ICtrlProcessor;
                    return processor.SetCurrentHttpConetext(context);
                }
            }

            return null;
        }
    }
}
