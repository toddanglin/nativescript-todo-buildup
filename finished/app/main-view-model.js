var Observable = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray;

function createViewModel() {
    var viewModel = new Observable();
    
    viewModel.newTodo = "";
    viewModel.todos = new ObservableArray([]);
    
    viewModel.add = function(args){
      if (viewModel.get("newTodo").trim().length > 0) {
            viewModel.todos.push(viewModel.get("newTodo").trim());
        
            //Clear the input field observable
            viewModel.set("newTodo", "");           
      } 
    };
    
    viewModel.total = function(){
      return viewModel.todos.length;
    };
    
    viewModel.clearCompleted = function(args){
      alert("TODO: Clear completed todos");
      
      console.log("Clear Completed", args);
    };

    return viewModel;
}

exports.createViewModel = createViewModel;