import { Component, OnInit } from '@angular/core';
import { EventServeService } from '../event-serve.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {

  public events = [];
  constructor(private _eventService: EventServeService, private router:Router) { }

  ngOnInit() {
    this._eventService.getEvents().subscribe(
      (data) => this.events = data,
      () => console.log('the sequence completed!')
    );
  }
}
