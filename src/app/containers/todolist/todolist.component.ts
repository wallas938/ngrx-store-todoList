import { Actions } from '../../store/actions/todoList.action';
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

  todos: Observable<ITodo[]>

  constructor(private store: Store<any>) {
    this.store.dispatch(new Actions.InitTodos(todosMock))
   }

  ngOnInit() {

    this.store.pipe(select('appState')).subscribe(
      todos => {
        this.todos = todos.data
      }
    )
  }

  onStatusChange(id: string) {
    this.store.dispatch(new Actions.IsDoneChecker(id))
    /* this.todos = [...this.todos].map<ITodo>(
      todo => {
        if(todo.id === id) {
          console.log(todo.status)
          todo.status = todo.status ? false : true
        }


        return todo
      }
    ) */
  }

}
