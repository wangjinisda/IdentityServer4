"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var nga_module_1 = require("../../theme/nga.module");
var ui_routing_1 = require("./ui.routing");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var ui_component_1 = require("./ui.component");
var buttons_component_1 = require("./components/buttons/buttons.component");
var grid_component_1 = require("./components/grid/grid.component");
var icons_component_1 = require("./components/icons/icons.component");
var modals_component_1 = require("./components/modals/modals.component");
var typography_component_1 = require("./components/typography/typography.component");
var flatButtons_1 = require("./components/buttons/components/flatButtons");
var raisedButtons_1 = require("./components/buttons/components/raisedButtons");
var sizedButtons_1 = require("./components/buttons/components/sizedButtons");
var disabledButtons_1 = require("./components/buttons/components/disabledButtons");
var iconButtons_1 = require("./components/buttons/components/iconButtons");
var largeButtons_1 = require("./components/buttons/components/largeButtons");
var dropdownButtons_1 = require("./components/buttons/components/dropdownButtons");
var groupButtons_1 = require("./components/buttons/components/groupButtons");
var icons_service_1 = require("./components/icons/icons.service");
var UiModule = (function () {
    function UiModule() {
    }
    return UiModule;
}());
UiModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            nga_module_1.NgaModule,
            ng2_bootstrap_1.DropdownModule,
            ng2_bootstrap_1.ModalModule,
            ui_routing_1.routing
        ],
        declarations: [
            buttons_component_1.Buttons,
            grid_component_1.Grid,
            icons_component_1.Icons,
            modals_component_1.Modals,
            typography_component_1.Typography,
            ui_component_1.Ui,
            flatButtons_1.FlatButtons,
            raisedButtons_1.RaisedButtons,
            sizedButtons_1.SizedButtons,
            disabledButtons_1.DisabledButtons,
            iconButtons_1.IconButtons,
            largeButtons_1.LargeButtons,
            dropdownButtons_1.DropdownButtons,
            groupButtons_1.GroupButtons
        ],
        providers: [
            icons_service_1.IconsService
        ]
    })
], UiModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UiModule;
//# sourceMappingURL=ui.module.js.map