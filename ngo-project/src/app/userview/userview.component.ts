import { Component, OnInit } from '@angular/core';
import { EventServeService } from '../event-serve.service';
import { Router } from '@angular/router';
import { UserServeService } from '../user-serve.service';
import { AppComponent } from '../app-component/app.component';
import { LoginCheckService } from '../login-check.service';
@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {
  public events = [];
  constructor(
    private loginCheck: LoginCheckService,
    private _appComponent: AppComponent,
    private _userService: UserServeService,
    private _eventService: EventServeService,
    private router: Router) { }

  ngOnInit() {
    this._userService.getUserIdFromToken().subscribe(
      (res) => {
        if (!res['admin']) {
          console.log('Failing on ngOnInit-userview.component.ts')
          console.log('Token doesnot belong to admin')
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
    this._eventService.getEvents().subscribe(
      (data) => this.events = data,
      (err) => {
        console.log('Failing on ngOnInit-userview.component.ts', err)
      }
    );
  }
  navuser() {
    this.router.navigate(['/user'])
  }
  navevent() {
    this.router.navigate(['/eventmanage'])
  }
  navuserv() {
    this.router.navigate(['/userview'])
  }

}
