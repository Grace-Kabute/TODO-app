import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder  } from '@angular/forms';
import { Todos } from 'src/app/models/todos';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{

  addedTasks !: FormGroup;
  taskObject : Todos = new Todos();

  
  constructor(private FormBuilder : FormBuilder){}
ngOnInit(): void {
  this.addedTasks = this.FormBuilder.group({
  task: [''],
  date: new Date(),
  completed: false
  });
}
addTask(){
console.log(this.addedTasks)
this.taskObject.task = this.addedTasks.value.task;
this.taskObject.date = this.addedTasks.value.date;
this.taskObject.completed = this.addedTasks.value.completed;
}
}
