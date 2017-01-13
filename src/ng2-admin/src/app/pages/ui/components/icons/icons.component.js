"use strict";
var core_1 = require("@angular/core");
var icons_service_1 = require("./icons.service");
var Icons = (function () {
    function Icons(_iconsService) {
        this._iconsService = _iconsService;
    }
    Icons.prototype.ngOnInit = function () {
        this.icons = this._iconsService.getAll();
    };
    return Icons;
}());
Icons = __decorate([
    core_1.Component({
        selector: 'icons',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [require('./icons.scss')],
        template: require('./icons.html'),
    }),
    __metadata("design:paramtypes", [icons_service_1.IconsService])
], Icons);
exports.Icons = Icons;
//# sourceMappingURL=icons.component.js.map