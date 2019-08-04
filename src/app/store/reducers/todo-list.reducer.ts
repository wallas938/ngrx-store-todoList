import { TodoActionTypes } from "../actions/todoList.action";
import { AppActions } from "./../actions/todoList.action";
import { ITodoListState } from "../../models/app-state.interface";
import { todosMock } from "../datas/datas";
const initialState: ITodoListState = {
  todos: todosMock
};

export function todosReducer(state = initialState, action: AppActions) {
  switch (action.type) {
    case TodoActionTypes.INIT_TODOS:
      console.log(action);
      const allTodos = action.todos;
      return { ...state, todos: allTodos };

    case TodoActionTypes.ADD_NEW_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: action.todoId, name: action.name, status: action.isDone }
        ]
      };

    case TodoActionTypes.DELETE_TODO:
      const tabDelete = [...state.todos].filter(todo => {
        return todo.id !== action.todoId;
      });
      return {
        ...state,
        todos: tabDelete
      };

    case TodoActionTypes.IS_DONE:
      const tabIsDone = [...state.todos].map(todo => {
        if (todo.id === action.todoId) {
          todo.status = todo.status ? false : true;
        }
        return todo;
      });
      return {
        ...state,
        todos: tabIsDone
      };

    case TodoActionTypes.EDIT_TODO:

      const tabIsEdit = [...state.todos].map(todo => {
        if(todo.id === action.todoId) {
          todo.name = action.name
        }


        return todo
      })
      return {
        ...state,
        todos: tabIsEdit
      }

    default:
      console.log(action);
      return state;
  }
}
