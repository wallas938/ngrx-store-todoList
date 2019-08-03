import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
/* Materials NgModule start*/
import {MatToolbarModule} from '@angular/material/toolbar';
/* Materials NgModule end*/

import { AppComponent } from './app.component';
import { TodolistComponent } from './containers/todolist/todolist.component';
import { TodoComponent } from './containers/todolist/todo/todo.component';
import { NewTodoComponent } from './containers/new-todo/new-todo.component';
import { FooterComponent } from './containers/todolist/footer/footer.component';

const appRoutes: Routes = [
  { path: 'todo-list', component: TodolistComponent },
  { path: 'new-todo', component: TodoComponent },
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
