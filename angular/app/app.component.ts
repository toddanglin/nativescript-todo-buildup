import {Component} from "angular2/core";
import { TodoStore } from './services/store';

@Component({
    selector: "my-app",
    templateUrl: 'app.html',
    providers: [TodoStore],
    styleUrls: ['common.css', 'app.css']
})

export class AppComponent {
    todoStore: TodoStore;
    newTodoText: string = "";
    
    constructor(todoStore: TodoStore) {
        this.todoStore = todoStore;
    }  
    
    add() {
        this.todoStore.add(this.newTodoText);
        
        this.newTodoText = "";
    }
    
    remove(todo: string) {
        this.todoStore.remove(todo);
    }  
}