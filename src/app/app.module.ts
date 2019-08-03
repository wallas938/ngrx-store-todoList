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
/* Materials NgModule end*/

import { AppComponent } from './app.component';
import { TodolistComponent } from './containers/todolist/todolist.component';
import { TodoComponent } from './containers/todolist/todo/todo.component';
import { NewTodoComponent } from './containers/new-todo/new-todo.component';
import { FooterComponent } from './containers/todolist/footer/footer.component';
import { MatNativeDateModule } from '@angular/material/core';

/* Store MODULES start */
import { StoreModule } from '@ngrx/store'
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
  ],
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
    StoreModule.forRoot({}),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
