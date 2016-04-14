 var ObservableArray = require("data/observable-array").ObservableArray;
 
 viewModel.newTodo = "";
    viewModel.todos = new ObservableArray([]);
    
    viewModel.add = function(args){
      if (viewModel.get("newTodo").trim().length > 0) {
            viewModel.todos.push(viewModel.get("newTodo").trim());
        
            //Clear the input field observable
            viewModel.set("newTodo", "");           
      } 
    };