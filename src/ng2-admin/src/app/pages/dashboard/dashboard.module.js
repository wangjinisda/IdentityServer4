"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var nga_module_1 = require("../../theme/nga.module");
var dashboard_component_1 = require("./dashboard.component");
var dashboard_routing_1 = require("./dashboard.routing");
var popularApp_1 = require("./popularApp");
var pieChart_1 = require("./pieChart");
var trafficChart_1 = require("./trafficChart");
var usersMap_1 = require("./usersMap");
var lineChart_1 = require("./lineChart");
var feed_1 = require("./feed");
var todo_1 = require("./todo");
var calendar_1 = require("./calendar");
var calendar_service_1 = require("./calendar/calendar.service");
var feed_service_1 = require("./feed/feed.service");
var lineChart_service_1 = require("./lineChart/lineChart.service");
var pieChart_service_1 = require("./pieChart/pieChart.service");
var todo_service_1 = require("./todo/todo.service");
var trafficChart_service_1 = require("./trafficChart/trafficChart.service");
var usersMap_service_1 = require("./usersMap/usersMap.service");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            nga_module_1.NgaModule,
            dashboard_routing_1.routing
        ],
        declarations: [
            popularApp_1.PopularApp,
            pieChart_1.PieChart,
            trafficChart_1.TrafficChart,
            usersMap_1.UsersMap,
            lineChart_1.LineChart,
            feed_1.Feed,
            todo_1.Todo,
            calendar_1.Calendar,
            dashboard_component_1.Dashboard
        ],
        providers: [
            calendar_service_1.CalendarService,
            feed_service_1.FeedService,
            lineChart_service_1.LineChartService,
            pieChart_service_1.PieChartService,
            todo_service_1.TodoService,
            trafficChart_service_1.TrafficChartService,
            usersMap_service_1.UsersMapService
        ]
    })
], DashboardModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map