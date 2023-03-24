import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements  OnInit {
 constructor(private tasksService :TaskService){}
  
  myTask:Task ={
    taskName: '',
    description: '',
    status: '',
    dueDate: new Date(),
    dateCreation: new Date(),
  }
  task: Task[]=[];

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((response)=>{
      this.task = response
    })
  }
  destroyTask(tasklist:Task){
    if(!confirm('are you sure you want  to delete this Task ?')){
      return
    }
    this.tasksService.deleteTask(tasklist.id).subscribe((response) =>{
      this.task = this.task.filter(task => task.id != tasklist.id)
    })
    //this.tasksService.getTasks().subscribe((response)=>{
    //  this.task = response
    //})
  }

}
