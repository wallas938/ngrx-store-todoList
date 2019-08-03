import { ITodo } from "src/app/models/todo.interface";


  export enum TodoActionTypes {
    INIT_TODOS = "[todoList] Init Todos",
    ADD_NEW_TODO = "[todolist] Add new Todo",
    IS_DONE = "[todolist] Check if todo is done",
    DELETE_TODO = "[todolist] Delete Todo"
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
    newTodo: ITodo
    constructor(newTodo: ITodo) {
      this.newTodo = newTodo
    }
  }
  export class IsDoneChecker {
    readonly type = TodoActionTypes.IS_DONE;
    isDone: boolean
    todoId: string
    constructor(todoId: string) {
      this.todoId = todoId
      this.isDone = this.isDone ? false : true
    }
  }
  export class DeleteTodo {
    readonly type = TodoActionTypes.DELETE_TODO;
    todoId: string
    constructor(todoId: string) {
      this.todoId = todoId
    }
  }
}

export type AppActions =  Actions.InitTodos |
                          Actions.AddNewTodo |
                          Actions.IsDoneChecker |
                          Actions.DeleteTodo;
