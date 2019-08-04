import { Component, OnInit } from '@angular/core';
import { MatFormField, MatFormFieldControl } from '@angular/material/form-field'
import { MatInput } from '@angular/material/input'
import { MatDatepicker } from '@angular/material/datepicker'
import { MatSelect } from '@angular/material/select'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Actions } from 'src/app/store/actions/todoList.action';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {

  newTodoForm = this.fb.group({
    newTodo: ['', Validators.required],
    todoStatus: ['', Validators.required]
  })

  minDate = new Date(2019, 0, 1);
  maxDate = new Date(2030, 12, 31);

  constructor(private fb: FormBuilder,
              private router: Router,
              private store: Store<any>) { }

  ngOnInit() {
  }

  onSubmit() {
    const newTodo = this.newTodoForm.value.newTodo
    const todoStatus = this.newTodoForm.value.todoStatus
    this.store.dispatch( new Actions.AddNewTodo(newTodo, todoStatus) )
    this.router.navigate(['/todo-list'])
  }
/*
  chosenYearHandler(year) {
    console.log(year)
  }

  chosenMonthHandler(month) {
    console.log(month)
  } */

}
