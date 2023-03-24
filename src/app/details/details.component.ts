import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details: any=[];

  constructor(private route: ActivatedRoute,private taskService:TaskService,private router: Router){}
  ngOnInit(): void {
    this.route.params.subscribe((params:any) => this.getDetails(params.id));
  }

  getDetails(id:number){
    this.taskService.getTask(id).subscribe((response:any) => this.details = response)
  }
  deleteThisTask(id:number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.taskService.deleteTask(id).subscribe((response:any) => this.details = response)  
        Swal.fire({
            title: 'Deleted!',
            text: "Your Course has been deleted.",
            icon: 'success',
            timer: 3000
          })
      }
      this.router.navigate(['/tasklist'])
    })
  }

}
