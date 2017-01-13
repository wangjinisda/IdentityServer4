"use strict";
require("./app.loader.ts");
var core_1 = require("@angular/core");
var global_state_1 = require("./global.state");
var services_1 = require("./theme/services");
var theme_constants_1 = require("./theme/theme.constants");
var theme_config_1 = require("./theme/theme.config");
var theme_1 = require("./theme");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var app_menu_1 = require("./app.menu");
/*
 * App Component
 * Top Level Component
 */
var App = (function () {
    function App(_state, _imageLoader, _spinner, _config, _menuService, viewContainerRef) {
        var _this = this;
        this._state = _state;
        this._imageLoader = _imageLoader;
        this._spinner = _spinner;
        this._config = _config;
        this._menuService = _menuService;
        this.viewContainerRef = viewContainerRef;
        this.isMenuCollapsed = false;
        this._menuService.updateMenuByRoutes(app_menu_1.MENU);
        this._fixModals();
        this._loadImages();
        this._state.subscribe('menu.isCollapsed', function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
    }
    App.prototype.ngAfterViewInit = function () {
        var _this = this;
        // hide spinner once all loaders are completed
        services_1.BaThemePreloader.load().then(function (values) {
            _this._spinner.hide();
        });
    };
    App.prototype._loadImages = function () {
        // register some loaders
        services_1.BaThemePreloader.registerLoader(this._imageLoader.load(theme_constants_1.layoutPaths.images.root + 'sky-bg.jpg'));
    };
    App.prototype._fixModals = function () {
        ng2_bootstrap_1.ComponentsHelper.prototype.getRootViewContainerRef = function () {
            // https://github.com/angular/angular/issues/9293
            if (this.root) {
                return this.root;
            }
            var comps = this.applicationRef.components;
            if (!comps.length) {
                throw new Error("ApplicationRef instance not found");
            }
            try {
                /* one more ugly hack, read issue above for details */
                var rootComponent = this.applicationRef._rootComponents[0];
                this.root = rootComponent._component.viewContainerRef;
                return this.root;
            }
            catch (e) {
                throw new Error("ApplicationRef instance not found");
            }
        };
    };
    return App;
}());
App = __decorate([
    core_1.Component({
        selector: 'app',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [require('normalize.css'), require('./app.scss')],
        template: "\n    <main [ngClass]=\"{'menu-collapsed': isMenuCollapsed}\" baThemeRun>\n      <div class=\"additional-bg\"></div>\n      <router-outlet></router-outlet>\n    </main>\n  "
    }),
    __metadata("design:paramtypes", [global_state_1.GlobalState,
        services_1.BaImageLoaderService,
        services_1.BaThemeSpinner,
        theme_config_1.BaThemeConfig,
        theme_1.BaMenuService,
        core_1.ViewContainerRef])
], App);
exports.App = App;
//# sourceMappingURL=app.component.js.map