export default class Todo {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed
    this.description = data.description
  }
  get Template() {
    return `
    <div class="row item">
    <div class="col-10">
    <input type="checkbox" id="${this._id}" name="${this._id}">
    <label for="${this._id}">${this.description}</label>
    </div>
    <div class="col-2" id="trash">
    <i class="fas fa-trash" onclick="app.todoController.removeTodo('${this._id}')"></i>
    </div>
    </div>
    `
  }
}