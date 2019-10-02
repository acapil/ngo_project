import { Component, OnInit } from '@angular/core';
import { EventServeService } from '../event-serve.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServeService } from '../user-serve.service';
import { AppComponent } from '../app-component/app.component';
import { LoginCheckService } from '../login-check.service';
@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.component.html',
  styleUrls: ['./eventdetail.component.css']
})
export class EventdetailComponent implements OnInit {

  public event = [];
  constructor(
    private loginCheck: LoginCheckService,
    private _userService: UserServeService,
    private _eventService: EventServeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  private event_id = parseInt(this.route.snapshot.paramMap.get('event_id'));

  ngOnInit() {

    this._userService.getUserIdFromToken().subscribe(
      (res) => {
        if(res['admin']){
          console.log('Failing on ngOnInit-eventdetail.component.ts')
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

    this.loginCheck.getLogin()
    this._eventService.getEvent(this.event_id).subscribe(
      (data) => this.event = data,
      (err) => {
        console.log('Failing to get event detailed info getEvent-eventdetail.component.ts' + err),
          this.router.navigate(['/eventlist'])
      }
    );
  }
  registerEvent(event_id) {
    console.log(event_id)
    this.router.navigate(['/eventreg/' + event_id]);
  }
}
