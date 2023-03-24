import { TaskService } from './../services/task.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../models/task';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-taskitem,[app-taskitem]',
  templateUrl: './taskitem.component.html',
  styleUrls: ['./taskitem.component.css']
})
export class TaskitemComponent implements OnInit {

  constructor(private route:ActivatedRoute,private taskService:TaskService){}
  ngOnInit(): void {
    this.route.params.subscribe(() => this.getAllTasks()) 
    // this.taskService.getTask().subscribe((response)=>{
    //   this.myTask = response
    // })   
  }

  @Input() tasklist:any = null;
  @Input() isFirst: boolean | undefined;
  @Input() isLast: boolean | undefined;
  @Input() odd: any = null
  @Input() even: any = null
  @Output() deleteOneTask = new EventEmitter();
   

  removeTask(id:number|undefined){
    this.deleteOneTask.emit({id:id})
   } 
  tasks:Task[] = [];
  myTask:Task ={
    taskName: '',
    description: '',
    status: '',
    dueDate: new Date(),
    dateCreation: new Date(),
  }

  toggleStatus(tasklist:Task): void {
    switch (tasklist.status) {
      case 'Todo':
        tasklist.status = 'in progress';
        break;
      case 'in progress':
        tasklist.status = 'Completed';
        break;
      case 'Completed':
        tasklist.status = 'Todo';
        break;
      default:
        break;
    }
    let { id,taskName,description,status,dueDate,dateCreation }: Task = tasklist
    this.taskService.patchTaskStatus(id,{taskName,description,status,dueDate,dateCreation}).subscribe((response)=>{})
  }
  getStatusClass(tasklist:Task): string {
    switch (tasklist.status) {
      case 'Completed':
        return 'bg-success';
      case 'in progress':
        return 'bg-warning';
      case 'Todo':
        return 'bg-primary';
      default:
        return '';
    }
  }

  // getOneTask( id:number | undefined){
  //   this.taskService.getTask(id).subscribe(response => this.myTask = response)
  // }
  getAllTasks(){
    this.taskService.getTasks().subscribe(response => this.tasks = response)
  }
}

