import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  urls: any = {
    todoList: true,
    newTodo: false,
  }

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.updateUrl()
  }


  updateUrl() {
    this.urls = {
      ...this.urls,
      newTodo: this.router.url === '/new-todo' ? true: false,
      todoList: this.router.url === '/todo-list' ? true : false
    }
  }

  onActivate() {
    this.updateUrl()
  }

}
