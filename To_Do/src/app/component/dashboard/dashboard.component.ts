import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
imageUrl : SafeResourceUrl;

constructor(private sanitizer: DomSanitizer, private router: Router){
this.imageUrl = this.sanitizer.bypassSecurityTrustUrl('https://media.domatron.com/media/1168/responsive-images/todo-app-b8s___jpg_599_599.jpg')
}
navigateToPage(): void {
  this.router.navigate(['./tasks']);
}
}
