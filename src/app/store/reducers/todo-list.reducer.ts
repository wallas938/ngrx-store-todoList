import { TodoActionTypes } from '../actions/todoList.action';
import { AppActions } from './../actions/todoList.action';
import { ITodoListState } from '../../models/app-state.interface'
import { todosMock } from '../datas/datas'
const initialState: ITodoListState = {
  todos: todosMock
}

export function todosReducer(state = initialState, action: AppActions) {

  switch (action.type) {
    case TodoActionTypes.INIT_TODOS:
      return {}
    case TodoActionTypes.ADD_NEW_TODO:
      return { }
    case TodoActionTypes.DELETE_TODO:
        return { }
    case TodoActionTypes.IS_DONE:
        const newTodos = [...state.todos].map(
          todo => {
            if(todo.id === action.todoId) {
              todo.status = todo.status ? false : true
            }
            return todo
          }
        )
        return {
          ...state,
          todos: newTodos
        }
    default:
        console.log(action)
        return state
  }
}
