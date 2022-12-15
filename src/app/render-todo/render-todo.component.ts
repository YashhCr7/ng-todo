import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-render-todo',
  templateUrl: './render-todo.component.html',
  styleUrls: ['./render-todo.component.scss']
})
export class RenderTodoComponent implements OnInit {

  todos: any[] = [];

  constructor(private router:Router) {}

  ngOnInit() {
    this.todos = JSON.parse(localStorage.getItem('todos')!)
    console.log(this.todos);
  }

  goToAddTodo() {
    this.router.navigate(['addTodo']);
  }
}
