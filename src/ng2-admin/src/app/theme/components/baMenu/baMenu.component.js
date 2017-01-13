"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var services_1 = require("../../services");
var global_state_1 = require("../../../global.state");
var BaMenu = (function () {
    function BaMenu(_router, _service, _state) {
        var _this = this;
        this._router = _router;
        this._service = _service;
        this._state = _state;
        this.sidebarCollapsed = false;
        this.expandMenu = new core_1.EventEmitter();
        this.outOfArea = -200;
        this._onRouteChange = this._router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                if (_this.menuItems) {
                    _this.selectMenuAndNotify();
                }
                else {
                    // on page load we have to wait as event is fired before menu elements are prepared
                    setTimeout(function () { return _this.selectMenuAndNotify(); });
                }
            }
        });
        this._menuItemsSub = this._service.menuItems.subscribe(this.updateMenu.bind(this));
    }
    BaMenu.prototype.updateMenu = function (newMenuItems) {
        this.menuItems = newMenuItems;
        this.selectMenuAndNotify();
    };
    BaMenu.prototype.selectMenuAndNotify = function () {
        if (this.menuItems) {
            this.menuItems = this._service.selectMenuItem(this.menuItems);
            this._state.notifyDataChanged('menu.activeLink', this._service.getCurrentItem());
        }
    };
    BaMenu.prototype.ngOnInit = function () {
    };
    BaMenu.prototype.ngOnDestroy = function () {
        this._onRouteChange.unsubscribe();
        this._menuItemsSub.unsubscribe();
    };
    BaMenu.prototype.hoverItem = function ($event) {
        this.showHoverElem = true;
        this.hoverElemHeight = $event.currentTarget.clientHeight;
        // TODO: get rid of magic 66 constant
        this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - 66;
    };
    BaMenu.prototype.toggleSubMenu = function ($event) {
        var submenu = jQuery($event.currentTarget).next();
        if (this.sidebarCollapsed) {
            this.expandMenu.emit(null);
            if (!$event.item.expanded) {
                $event.item.expanded = true;
            }
        }
        else {
            $event.item.expanded = !$event.item.expanded;
            submenu.slideToggle();
        }
        return false;
    };
    return BaMenu;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BaMenu.prototype, "sidebarCollapsed", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], BaMenu.prototype, "menuHeight", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BaMenu.prototype, "expandMenu", void 0);
BaMenu = __decorate([
    core_1.Component({
        selector: 'ba-menu',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [require('./baMenu.scss')],
        template: require('./baMenu.html')
    }),
    __metadata("design:paramtypes", [router_1.Router, services_1.BaMenuService, global_state_1.GlobalState])
], BaMenu);
exports.BaMenu = BaMenu;
//# sourceMappingURL=baMenu.component.js.map