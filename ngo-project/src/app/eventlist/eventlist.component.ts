import { Component, OnInit } from '@angular/core';
import { EventServeService } from '../event-serve.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServeService } from '../user-serve.service';
import { AppComponent } from '../app-component/app.component';
import { LoginCheckService } from '../login-check.service';
@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {

  public events = [];
  constructor(
    private loginCheck: LoginCheckService,
    private _userService: UserServeService,
    private _eventService: EventServeService, 
    private router:Router, 
    private route: ActivatedRoute) { }

  private message = this.route.snapshot.paramMap.get('message');

  ngOnInit() {
    this.loginCheck.getLogin()

    this._userService.getUserIdFromToken().subscribe(
      (res) => {
        if(res['admin']){
          console.log('Failing on ngOnInit-eventlist.component.ts')
          console.log('Token doesnot belong to regular user')
          this.router.navigate(['/error/' + 401])
        }
      },
      (err) => {
        console.log('Failing on ngOnInit-userview.component.ts')
        console.log('Cannot verify token')
        console.log(err['status'])
        console.log(err)
        this.router.navigate(['/error/' + err['status']])
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
