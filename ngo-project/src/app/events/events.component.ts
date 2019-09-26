import { Component, OnInit } from '@angular/core';
import { EventServeService } from '../event-serve.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public events = [];
  constructor(private _eventService: EventServeService) { }

  ngOnInit() {
    this._eventService.getEvents().subscribe(
      (data) => this.events = data,
      () => console.log('the sequence completed!')
    );
  }

}
