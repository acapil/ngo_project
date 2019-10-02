import { Component, OnInit } from '@angular/core';
import { EventServeService } from '../event-serve.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServeService } from '../user-serve.service';
import { AppComponent } from '../app-component/app.component';
@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {

  public events = [];
  constructor(
    private _appComponent: AppComponent,
    private _userService: UserServeService,
    private _eventService: EventServeService, 
    private router:Router, 
    private route: ActivatedRoute) { }

  private message = this.route.snapshot.paramMap.get('message');

  ngOnInit() {
    this._userService.getUserIdFromToken().subscribe(
      () => {this._appComponent.loggedin = true},
      (err) => {
        this._appComponent.loggedin = false
        console.log('Failed on ngOnInit-eventlist.component.ts')
        console.log('Cannot verify token')
        console.log(err)
        this.router.navigate(['/login'])
      }
    )
    this._eventService.getEvents().subscribe(
      (data) => this.events = data,
      (err) => {
        console.log('Failed on ngOnInit-eventlist.component.ts')
        console.log('Cannot get events')
        console.log(err)
      }
    );
  }
  details(event_id){
    this.router.navigate(['/eventdetail/'+ event_id]);
  }
}
