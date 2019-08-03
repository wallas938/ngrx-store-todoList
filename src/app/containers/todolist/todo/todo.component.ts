import { Component, OnInit, Input, Output } from '@angular/core';
import { MatListItem } from '@angular/material/list';
import { MatFormField, MatFormFieldControl } from '@angular/material/form-field'
import { MatInput } from '@angular/material/input'
import { EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() id: string
  @Input() name: string
  @Input() status: boolean
  @Output() isDone = new EventEmitter<string>()



  constructor() { }

  ngOnInit() {
  }

  onChange(id: string) {
    this.isDone.emit(id)
  }

}
