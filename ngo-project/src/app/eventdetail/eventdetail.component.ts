import { Component, OnInit } from '@angular/core';
import { EventServeService } from '../event-serve.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.component.html',
  styleUrls: ['./eventdetail.component.css']
})
export class EventdetailComponent implements OnInit {

  public events = [];
  constructor(private _eventService: EventServeService, private router:Router) { }

  ngOnInit() {
    this._eventService.getEvents().subscribe(
      (data) => this.events = data,
      () => console.log('the sequence completed!')
    );
  }
}
