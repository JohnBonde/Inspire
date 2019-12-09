import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let template = ''
  let todo = store.State.todos
  let count = todo.length
  for (let i = 0; i < todo.length; i++) {
    if (todo[i].completed == true) {
      count--
    }

  }
  todo.forEach(t => template += t.Template)
  document.getElementById('todo').innerHTML = template
  if (count == 1) {
    document.getElementById('title').innerHTML = count + ` thing Todo`
  }
  else {
    document.getElementById('title').innerHTML = count + ` things Todo`
  }
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    store.subscribe("todos", _drawTodos)
    TodoService.getTodosAsync();
  }

  async addTodoAsync(e) {
    e.preventDefault();
    let form = e.target;
    let todo = {
      //TODO build the todo object from the data that comes into this method
      description: form.description.value
    };
    try {
      await TodoService.addTodoAsync(todo);
      form.reset()
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  async toggleTodoStatus(todoId) {
    try {
      await TodoService.toggleTodoStatusAsync(todoId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  async removeTodo(todoId) {
    try {
      await TodoService.removeTodoAsync(todoId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }
}
