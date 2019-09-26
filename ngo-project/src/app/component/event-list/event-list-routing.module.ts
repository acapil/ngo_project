import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { EventCardComponent } from './event-card/event-card.component';


const routes: Routes = [
  {
    path: '',
    component: EventsComponent
  },
  {
    path: 'info',
    component: EventCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventListRoutingModule { }
