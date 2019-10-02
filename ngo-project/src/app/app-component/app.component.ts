import { Component } from '@angular/core';
import { UserServeService } from '../user-serve.service';
import { Router } from '@angular/router';
import { LoginCheckService } from '../login-check.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngo-project';

  constructor(
    private loginCheck: LoginCheckService,
    private _userService: UserServeService,
    private router: Router
  ) { }

  ngOnInit() {
     this.loginCheck.getLogin()
     this.loginCheck.isLoggedIn
  }

  onLogout() {
    this._userService.onLogout().subscribe(
      () => {
        this.loginCheck.changeToLogout()
        this.router.navigate(['/login'])
      },
      (err) => {
        console.log('Error onLogout-users.component.ts', err)
        this.loginCheck.changeToLogout()
        this.router.navigate(['/login'])
      }
    )
  }
}

