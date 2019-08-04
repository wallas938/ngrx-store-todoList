import { Component, OnInit, Input, Output, Inject } from '@angular/core';
import { MatListItem } from '@angular/material/list';
import {MatDialog} from '@angular/material/dialog';
import { MatFormField, MatFormFieldControl } from '@angular/material/form-field'
import { MatInput } from '@angular/material/input'
import { MatButton } from '@angular/material/button'
import { MatDivider } from '@angular/material/divider'
import { EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms'
import { EditModalComponent } from './edit-modal/edit-modal.component';

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
  @Output() toDelete = new EventEmitter<string>()
  @Output() toEdit = new EventEmitter<string>()
  @Output() updatedTodo = new EventEmitter<any>()

  constructor(public modal: MatDialog) { }

  ngOnInit() {
  }

  onChange(id: string) {
    this.isDone.emit(id)
  }

  onDelete(id: string) {
    this.toDelete.emit(id)
  }

  onEdit(id: string) {
    const modalRef = this.modal.open(

      EditModalComponent, {

        width: '250px',

        data: this.name

      }
    )
    modalRef.afterClosed().subscribe(

      name => {

        this.updatedTodo.emit({id: id, name: name})

      }
    )
  }

}
