import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { TaskComponent } from '../task/task.component';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
name = "TASKIFY";
imageUrl : SafeResourceUrl;
// modalRef: NgbModalRef;

constructor(private sanitizer: DomSanitizer, 
  private modalService: NgbModal){
this.imageUrl = this.sanitizer.bypassSecurityTrustUrl('./assets/icons8-add-40.png')
}

openModal(){
  console.log('Opening modal.');
  
  this.modalService.open(TaskComponent, {size: 'md', centered: true })
  .result.then((result) => {
    console.log('opened Modal');
    
  })
}
}
