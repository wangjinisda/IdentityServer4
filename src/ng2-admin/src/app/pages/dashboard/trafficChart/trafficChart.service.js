"use strict";
var core_1 = require("@angular/core");
var theme_1 = require("../../../theme");
var TrafficChartService = (function () {
    function TrafficChartService(_baConfig) {
        this._baConfig = _baConfig;
    }
    TrafficChartService.prototype.getData = function () {
        var dashboardColors = this._baConfig.get().colors.dashboard;
        return [
            {
                value: 2000,
                color: dashboardColors.white,
                highlight: theme_1.colorHelper.shade(dashboardColors.white, 15),
                label: 'Other',
                percentage: 87,
                order: 1,
            }, {
                value: 1500,
                color: dashboardColors.gossip,
                highlight: theme_1.colorHelper.shade(dashboardColors.gossip, 15),
                label: 'Search engines',
                percentage: 22,
                order: 4,
            }, {
                value: 1000,
                color: dashboardColors.silverTree,
                highlight: theme_1.colorHelper.shade(dashboardColors.silverTree, 15),
                label: 'Referral Traffic',
                percentage: 70,
                order: 3,
            }, {
                value: 1200,
                color: dashboardColors.surfieGreen,
                highlight: theme_1.colorHelper.shade(dashboardColors.surfieGreen, 15),
                label: 'Direct Traffic',
                percentage: 38,
                order: 2,
            }, {
                value: 400,
                color: dashboardColors.blueStone,
                highlight: theme_1.colorHelper.shade(dashboardColors.blueStone, 15),
                label: 'Ad Campaigns',
                percentage: 17,
                order: 0,
            },
        ];
    };
    return TrafficChartService;
}());
TrafficChartService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [theme_1.BaThemeConfigProvider])
], TrafficChartService);
exports.TrafficChartService = TrafficChartService;
//# sourceMappingURL=trafficChart.service.js.map