import { Injectable } from "angular2/core";

@Injectable()
export class TodoStore {
    todos: Array<string>
    
    constructor() {
        this.todos = new Array<string>();
    }
    
    add(title: string) {
        this.todos.push(title);
    }
    
    remove(todo: string) {
        this.todos.splice(this.todos.indexOf(todo), 1);
    }
    
    clearCompleted() {
      alert("TODO: Clear completed todos");
    }
}