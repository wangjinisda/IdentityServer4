"use strict";
var core_1 = require("@angular/core");
var theme_1 = require("../../../theme");
var todo_service_1 = require("./todo.service");
var Todo = (function () {
    function Todo(_baConfig, _todoService) {
        var _this = this;
        this._baConfig = _baConfig;
        this._todoService = _todoService;
        this.dashboardColors = this._baConfig.get().colors.dashboard;
        this.newTodoText = '';
        this.todoList = this._todoService.getTodoList();
        this.todoList.forEach(function (item) {
            item.color = _this._getRandomColor();
        });
    }
    Todo.prototype.getNotDeleted = function () {
        return this.todoList.filter(function (item) {
            return !item.deleted;
        });
    };
    Todo.prototype.addToDoItem = function ($event) {
        if (($event.which === 1 || $event.which === 13) && this.newTodoText.trim() != '') {
            this.todoList.unshift({
                text: this.newTodoText,
                color: this._getRandomColor(),
            });
            this.newTodoText = '';
        }
    };
    Todo.prototype._getRandomColor = function () {
        var _this = this;
        var colors = Object.keys(this.dashboardColors).map(function (key) { return _this.dashboardColors[key]; });
        var i = Math.floor(Math.random() * (colors.length - 1));
        return colors[i];
    };
    return Todo;
}());
Todo = __decorate([
    core_1.Component({
        selector: 'todo',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [require('./todo.scss')],
        template: require('./todo.html')
    }),
    __metadata("design:paramtypes", [theme_1.BaThemeConfigProvider, todo_service_1.TodoService])
], Todo);
exports.Todo = Todo;
//# sourceMappingURL=todo.component.js.map