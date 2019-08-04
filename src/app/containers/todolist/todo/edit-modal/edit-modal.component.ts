import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoComponent } from '../todo.component';
import { MatFormField } from '@angular/material/form-field'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {


  constructor(
    public modalRef: MatDialogRef<EditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public name: string) {
    }

  ngOnInit() {
  }
  onNoClick(): void {
    this.modalRef.close()
  }
}
