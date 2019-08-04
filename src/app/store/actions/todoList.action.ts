import { ITodo } from "src/app/models/todo.interface";


  export enum TodoActionTypes {
    INIT_TODOS = "[todoList] Init Todos",
    ADD_NEW_TODO = "[todolist] Add new Todo",
    IS_DONE = "[todolist] Check if todo is done",
    DELETE_TODO = "[todolist] Delete Todo",
    EDIT_TODO = "[todolist] Edit Todo",
  }
  export namespace Actions {
  export class InitTodos {
    readonly type = TodoActionTypes.INIT_TODOS;
    todos: ITodo[] = [];
    constructor(todos: ITodo[]) {
      this.todos = todos;
    }
  }
  export class AddNewTodo {
    readonly type = TodoActionTypes.ADD_NEW_TODO;
    todoId: string
    isDone: boolean
    name: ITodo
    constructor(newTodo: ITodo, todoStatus: string) {
      this.name = newTodo
      this.isDone = todoStatus === "1" ? true : false
      this.todoId = 'id_' + Math.random().toString(36).substr(2)
    }
  }
  export class IsDoneChecker {
    readonly type = TodoActionTypes.IS_DONE;
    isDone: boolean
    todoId: string
    constructor(todoId: string) {
      this.todoId = todoId
    }
  }
  export class DeleteTodo {
    readonly type = TodoActionTypes.DELETE_TODO;
    todoId: string
    constructor(todoId: string) {
      this.todoId = todoId
    }
  }
  export class EditTodo {
    readonly type = TodoActionTypes.EDIT_TODO;
    todoId: string
    name: string
    constructor(todoId: string, newName: string) {
      this.todoId = todoId
      this.name = newName
    }
  }
}

export type AppActions =  Actions.InitTodos |
                          Actions.AddNewTodo |
                          Actions.IsDoneChecker |
                          Actions.EditTodo |
                          Actions.DeleteTodo;
