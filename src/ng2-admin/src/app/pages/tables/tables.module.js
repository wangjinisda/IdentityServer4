"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var nga_module_1 = require("../../theme/nga.module");
var tables_routing_1 = require("./tables.routing");
var tables_component_1 = require("./tables.component");
var basicTables_component_1 = require("./components/basicTables/basicTables.component");
var smartTables_component_1 = require("./components/smartTables/smartTables.component");
var ng2_smart_table_1 = require("ng2-smart-table");
var basicTables_service_1 = require("./components/basicTables/basicTables.service");
var responsiveTable_1 = require("./components/basicTables/components/responsiveTable");
var stripedTable_1 = require("./components/basicTables/components/stripedTable");
var borderedTable_1 = require("./components/basicTables/components/borderedTable");
var hoverTable_1 = require("./components/basicTables/components/hoverTable");
var condensedTable_1 = require("./components/basicTables/components/condensedTable");
var contextualTable_1 = require("./components/basicTables/components/contextualTable");
var smartTables_service_1 = require("./components/smartTables/smartTables.service");
var TablesModule = (function () {
    function TablesModule() {
    }
    return TablesModule;
}());
TablesModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            nga_module_1.NgaModule,
            ng2_smart_table_1.Ng2SmartTableModule,
            tables_routing_1.routing
        ],
        declarations: [
            tables_component_1.Tables,
            basicTables_component_1.BasicTables,
            smartTables_component_1.SmartTables,
            hoverTable_1.HoverTable,
            borderedTable_1.BorderedTable,
            condensedTable_1.CondensedTable,
            stripedTable_1.StripedTable,
            contextualTable_1.ContextualTable,
            responsiveTable_1.ResponsiveTable
        ],
        providers: [
            basicTables_service_1.BasicTablesService,
            smartTables_service_1.SmartTablesService
        ]
    })
], TablesModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TablesModule;
//# sourceMappingURL=tables.module.js.map