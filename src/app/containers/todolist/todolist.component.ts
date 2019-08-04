import { Actions } from 'src/app/store/actions/todoList.action';
import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/todo.interface';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { todosMock } from '../../store/datas/datas'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todos$: Observable<ITodo[]>

  constructor(private store: Store<{appState: ITodo[]}>) {
   }

  ngOnInit() {

    this.store.pipe(select('appState')).subscribe(
      state => {
        this.todos$ = state.todos
      }
    )
  }

  onStatusChange(id: string) {
    this.store.dispatch(new Actions.IsDoneChecker(id))
  }

  onDeleteTodo(id: string) {
    this.store.dispatch(new Actions.DeleteTodo(id))
  }

  onUpdatedTodo(todo: any) {
    console.log(todo)
    this.store.dispatch(new Actions.EditTodo(todo.id, todo.name))
  }

}
