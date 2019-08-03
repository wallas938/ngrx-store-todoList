import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/todo.interface';
import { MatList } from '@angular/material/list';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todos: ITodo[] = [
    {
      id:'id_' + Math.random().toString(36).substr(2),
      name: 'Manger au 129',
      status: false
    },
    {
      id:'id_' + Math.random().toString(36).substr(2),
      name: 'Faire Salat',
      status: true
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  onStatusChange(id: string) {
    this.todos = [...this.todos].map<ITodo>(
      todo => {
        if(todo.id === id) {
          console.log(todo.status)
          todo.status = todo.status ? false : true
        }

          
        return todo
      }
    )
  }

}
