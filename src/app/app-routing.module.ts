import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { RenderTodoComponent } from './render-todo/render-todo.component';

const routes: Routes = [
  {
    path:"",
    redirectTo: "addTodo",
    pathMatch:"full"
  },
  {
    path:"addTodo",
    component: CreateTaskComponent,
  },
  {
    path:"showTodo",
    component: RenderTodoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
