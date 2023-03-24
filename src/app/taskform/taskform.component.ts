import { TaskService } from './../services/task.service';
import { Component } from '@angular/core';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Task } from '../models/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent {
  constructor(private taskService:TaskService,private router: Router){}

  taskForm = new FormGroup({
    taskName:new  UntypedFormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(19),Validators.pattern('[a-zA-Z0-9 ]*')]),
    description:new UntypedFormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(30),Validators.pattern('[a-zA-Z0-9 ]*')]),
    dueDate:new UntypedFormControl(''),
    dateCreation: new UntypedFormControl(new Date()) // add the new form control here
  })

  tasks: Task[] = [];

  myTasks:Task = {
    taskName:'',
    description:'',
    status:'',
    dueDate: new Date(),
    dateCreation: new Date()
  }
  
  saveTask(){
    if(this.taskForm.invalid){
      alert("Please verify the content on the form");
      console.log(this.taskForm)
      return
    }
    let {taskName,description,dueDate,dateCreation} =this.taskForm.value
      this.taskService.persistTask({  taskName,description,status:'Todo',dueDate,dateCreation }).subscribe((response)=>{
        this.tasks = [...this.tasks,response]
        this.taskForm.reset();
        setTimeout(() => {
          this.router.navigate(['/tasklist'])
        }, 2000);
      })
      return  
  }

  

}
