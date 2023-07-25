import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TasksComponent } from './component/tasks/tasks.component';
import { TaskComponent } from './component/task/task.component';
import { NoTaskComponent } from './component/no-task/no-task.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard',pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'task', component: TaskComponent},
  {path: 'no-task', component: NoTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
