"use strict";
var core_1 = require("angular2/core");
var TodoStore = (function () {
    function TodoStore() {
        this.todos = new Array();
    }
    TodoStore.prototype.add = function (title) {
        this.todos.push(title);
    };
    TodoStore.prototype.remove = function (todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
    };
    TodoStore.prototype.clearCompleted = function () {
        alert("TODO: Clear completed todos");
    };
    TodoStore = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TodoStore);
    return TodoStore;
}());
exports.TodoStore = TodoStore;
//# sourceMappingURL=store.js.map