import { Component, OnInit } from '@angular/core';
import { MatFormField, MatFormFieldControl } from '@angular/material/form-field'
import { MatInput } from '@angular/material/input'
import { MatDatepicker } from '@angular/material/datepicker'
import { MatSelect } from '@angular/material/select'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.newTodoForm.value)
  }
/*
  chosenYearHandler(year) {
    console.log(year)
  }

  chosenMonthHandler(month) {
    console.log(month)
  } */

}
