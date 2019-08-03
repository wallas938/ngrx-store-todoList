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
      name: 'Manger au 129',
      status: false
    },
    {
      name: 'Faire Salat',
      status: true
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  onStatusChange(newState: boolean) {
    console.log(newState)
  }

}
