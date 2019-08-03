import { TodoListState } from '../datas/app.initialState'
import { todosMock } from '../datas/datas'
const initialState: TodoListState = {
  data: todosMock
}

export function todosReducer(state = initialState, action: TodoListState.Actions) {

}