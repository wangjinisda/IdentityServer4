"use strict";
var core_1 = require("@angular/core");
var smartTables_service_1 = require("./smartTables.service");
var ng2_smart_table_1 = require("ng2-smart-table");
var SmartTables = (function () {
    function SmartTables(service) {
        var _this = this;
        this.service = service;
        this.query = '';
        this.settings = {
            add: {
                addButtonContent: '<i class="ion-ios-plus-outline"></i>',
                createButtonContent: '<i class="ion-checkmark"></i>',
                cancelButtonContent: '<i class="ion-close"></i>',
            },
            edit: {
                editButtonContent: '<i class="ion-edit"></i>',
                saveButtonContent: '<i class="ion-checkmark"></i>',
                cancelButtonContent: '<i class="ion-close"></i>',
            },
            delete: {
                deleteButtonContent: '<i class="ion-trash-a"></i>',
                confirmDelete: true
            },
            columns: {
                id: {
                    title: 'ID',
                    type: 'number'
                },
                firstName: {
                    title: 'First Name',
                    type: 'string'
                },
                lastName: {
                    title: 'Last Name',
                    type: 'string'
                },
                username: {
                    title: 'Username',
                    type: 'string'
                },
                email: {
                    title: 'E-mail',
                    type: 'string'
                },
                age: {
                    title: 'Age',
                    type: 'number'
                }
            }
        };
        this.source = new ng2_smart_table_1.LocalDataSource();
        this.service.getData().then(function (data) {
            _this.source.load(data);
        });
    }
    SmartTables.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    return SmartTables;
}());
SmartTables = __decorate([
    core_1.Component({
        selector: 'basic-tables',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [require('./smartTables.scss')],
        template: require('./smartTables.html')
    }),
    __metadata("design:paramtypes", [smartTables_service_1.SmartTablesService])
], SmartTables);
exports.SmartTables = SmartTables;
//# sourceMappingURL=smartTables.component.js.map