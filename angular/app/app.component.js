"use strict";
var core_1 = require("angular2/core");
var store_1 = require('./services/store');
var AppComponent = (function () {
    function AppComponent(todoStore) {
        this.newTodoText = "";
        this.todoStore = todoStore;
    }
    AppComponent.prototype.add = function () {
        this.todoStore.add(this.newTodoText);
        this.newTodoText = "";
    };
    AppComponent.prototype.remove = function (todo) {
        this.todoStore.remove(todo);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: 'app.html',
            providers: [store_1.TodoStore],
            styleUrls: ['common.css', 'app.css']
        }), 
        __metadata('design:paramtypes', [store_1.TodoStore])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map