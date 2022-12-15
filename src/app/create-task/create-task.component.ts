import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
 constructor (public fb: FormBuilder, private router:Router){
 }
 todos:Array<FormGroup>=[]

ngOnInit(): void{
  // this.todos=(localStorage.getItem('todos')?JSON.parse(localStorage.getItem('todos')):[])
  this.todos=(localStorage.getItem('todos')?JSON.parse(localStorage.getItem('todos')!):[])
 }

  todoForm : FormGroup = this.fb.group({
    task:['',Validators.required],
    date:['',Validators.required]
 })

onSubmit(){
  this.todos.push(this.todoForm.value)
  localStorage.setItem('todos', JSON.stringify(this.todos))
  console.log(this.todoForm.value);
  this.todoForm.reset()
  this.router.navigate(['showTodo']);
}
}
