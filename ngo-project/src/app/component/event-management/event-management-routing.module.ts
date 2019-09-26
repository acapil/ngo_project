import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsManagementComponent } from './events-management/events-management.component';


const routes: Routes = [
  {
    path: '',
    component: EventsManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventManagementRoutingModule { }
