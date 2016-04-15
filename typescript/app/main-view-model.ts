import { Observable } from 'data/observable';
import { ObservableArray } from 'data/observable-array';

class MainViewModel extends Observable {
    newTodo: string = "";
    todos: ObservableArray<string>;
    
    constructor() {
        super();
        
        this.todos = new ObservableArray([]);
        
        
    }
    
    add(args) {
      if (this.get("newTodo").trim().length > 0) {
        this.todos.push(this.get("newTodo").trim());
        
        //Clear the input field observable
        this.set("newTodo", "");           
      } 
    };
    
    total = function() {
      return this.todos.length;
    };
    
    clearCompleted(args) {
      alert("TODO: Clear completed todos");
      console.log("Clear Completed", args);
    };
}

export default MainViewModel;