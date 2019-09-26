import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventManagementRoutingModule } from './event-management-routing.module';
import { EventsManagementComponent } from './events-management/events-management.component';


@NgModule({
  declarations: [EventsManagementComponent],
  imports: [
    CommonModule,
    EventManagementRoutingModule
  ]
})
export class EventManagementModule { }
