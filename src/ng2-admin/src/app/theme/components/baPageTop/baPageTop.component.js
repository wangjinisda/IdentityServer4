"use strict";
var core_1 = require("@angular/core");
var global_state_1 = require("../../../global.state");
var BaPageTop = (function () {
    function BaPageTop(_state) {
        var _this = this;
        this._state = _state;
        this.isScrolled = false;
        this.isMenuCollapsed = false;
        this._state.subscribe('menu.isCollapsed', function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
    }
    BaPageTop.prototype.toggleMenu = function () {
        this.isMenuCollapsed = !this.isMenuCollapsed;
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
        return false;
    };
    BaPageTop.prototype.scrolledChanged = function (isScrolled) {
        this.isScrolled = isScrolled;
    };
    return BaPageTop;
}());
BaPageTop = __decorate([
    core_1.Component({
        selector: 'ba-page-top',
        styles: [require('./baPageTop.scss')],
        template: require('./baPageTop.html'),
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [global_state_1.GlobalState])
], BaPageTop);
exports.BaPageTop = BaPageTop;
//# sourceMappingURL=baPageTop.component.js.map