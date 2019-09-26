import { Component, OnInit } from '@angular/core';
import { EventServeService } from '../event-serve.service';
@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {
  public events = [];
  constructor(private _eventService: EventServeService) { }

  ngOnInit() {
    this._eventService.getEvents().subscribe(
      (data) => this.events = data,
      () => console.log('the sequence completed!')
    );
  }
  

}
