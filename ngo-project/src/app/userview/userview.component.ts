import { Component, OnInit } from '@angular/core';
import { EventServeService } from '../event-serve.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {
  public events = [];
  constructor(private _eventService: EventServeService, private router:Router) { }

  ngOnInit() {
    this._eventService.getEvents().subscribe(
      (data) => this.events = data,
      () => console.log('the sequence completed!')
    );
  }
  navuser(){
    this.router.navigate(['/user'])
  }
  navevent(){
    this.router.navigate(['/eventmanage'])
  }
  navuserv(){
    this.router.navigate(['/userview'])
  }

}
