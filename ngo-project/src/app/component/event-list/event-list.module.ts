import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventListRoutingModule } from './event-list-routing.module';
import { EventsComponent } from './events/events.component';
import { EventCardComponent } from './event-card/event-card.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [EventsComponent, EventCardComponent],
  imports: [
    CommonModule,
    EventListRoutingModule,

    // Material
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ]
})
export class EventListModule { }
