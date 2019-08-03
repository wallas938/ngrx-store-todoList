export namespace TodoListModule {
  export enum ActionTypes {
    INIT_TODOS = "[todoList] Init Todos",
    ADD_NEW_TODO = "[todolist] Add new Todo",
    CHECK_TODO = "[todolist] Check Todo",
    UNCHECK_TODO = "[todolist] Uncheck Todo",
    DELETE_TODO = "[todolist] Delete Todo"
  }

  export class InitTodos {
    readonly type = ActionTypes.INIT_TODOS;
  }
  export class AddNewTodo {
    readonly type = ActionTypes.ADD_NEW_TODO;
  }
  export class CheckTodo {
    readonly type = ActionTypes.CHECK_TODO;
  }
  export class UnCheckTodo {
    readonly type = ActionTypes.UNCHECK_TODO;
  }
  export class DeleteTodo {
    readonly type = ActionTypes.DELETE_TODO;
  }

  export type Actions = InitTodos | AddNewTodo | CheckTodo |
  DeleteTodo ;
}
