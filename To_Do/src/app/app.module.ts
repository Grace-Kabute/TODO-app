import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TasksComponent } from './component/tasks/tasks.component';
import { TaskComponent } from './component/task/task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NoTaskComponent } from './component/no-task/no-task.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TasksComponent,
    TaskComponent,
    NoTaskComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
