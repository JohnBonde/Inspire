import store from "../store.js";
import Todo from "../models/Todo.js"

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/JohnBonde/todos/",
  timeout: 8000
});

class TodoService {
  async getTodosAsync() {
    console.log("Getting the Todo List");
    let res = await todoApi.get();
    store.commit("todos", res.data.data.map(t => new Todo(t)))
    console.log("from todos", store.State.todos);

    //TODO Handle this response from the server
  }

  async addTodoAsync(todo) {
    let res = await todoApi.post("", todo);
    this.getTodosAsync()

    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  async toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)
    if (todo.completed == true) {
      todo.completed = false
    } else {
      todo.completed = true
    }
    let res = await todoApi.put(todoId, todo);
    this.getTodosAsync()
    console.log(res);

    //TODO do you care about this data? or should you go get something else?
  }

  async removeTodoAsync(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
    await todoApi.delete(todoId)
    this.getTodosAsync()
  }
}

const todoService = new TodoService();
export default todoService;
