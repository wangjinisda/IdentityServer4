"use strict";
var core_1 = require("@angular/core");
var theme_1 = require("../../../theme");
var PieChartService = (function () {
    function PieChartService(_baConfig) {
        this._baConfig = _baConfig;
    }
    PieChartService.prototype.getData = function () {
        var pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
        return [
            {
                color: pieColor,
                description: 'New Visits',
                stats: '57,820',
                icon: 'person',
            }, {
                color: pieColor,
                description: 'Purchases',
                stats: '$ 89,745',
                icon: 'money',
            }, {
                color: pieColor,
                description: 'Active Users',
                stats: '178,391',
                icon: 'face',
            }, {
                color: pieColor,
                description: 'Returned',
                stats: '32,592',
                icon: 'refresh',
            }
        ];
    };
    return PieChartService;
}());
PieChartService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [theme_1.BaThemeConfigProvider])
], PieChartService);
exports.PieChartService = PieChartService;
//# sourceMappingURL=pieChart.service.js.map