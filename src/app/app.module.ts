import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
/* Materials NgModule start*/
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list'
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
/* Materials NgModule end*/

import { AppComponent } from './app.component';
import { TodolistComponent } from './containers/todolist/todolist.component';
import { TodoComponent } from './containers/todolist/todo/todo.component';
import { NewTodoComponent } from './containers/new-todo/new-todo.component';
import { FooterComponent } from './containers/todolist/footer/footer.component';
import { MatNativeDateModule } from '@angular/material/core';

/* Store MODULES start */
import { StoreModule, reduceState } from '@ngrx/store'
import { todosReducer } from './store/reducers/todo-list.reducer';
import { EditModalComponent } from './containers/todolist/todo/edit-modal/edit-modal.component'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'
/* Store MODULES end*/

const appRoutes: Routes = [
  { path: 'todo-list', component: TodolistComponent },
  { path: 'new-todo', component: NewTodoComponent },
  { path: '', redirectTo: 'todo-list', pathMatch: 'full'},
  { path: '**', redirectTo: 'todo-list'}
]

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoComponent,
    NewTodoComponent,
    FooterComponent,
    EditModalComponent,
  ],
  entryComponents: [EditModalComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatDialogModule,
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot({ appState: todosReducer }),
    RouterModule.forRoot(appRoutes),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent],
  exports: [EditModalComponent]
})
export class AppModule { }
