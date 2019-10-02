import { Component, OnInit } from '@angular/core';
import { UserServeService } from '../user-serve.service';
import { Globals } from '../globals'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app-component/app.component'
import { LoginCheckService } from '../login-check.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  input;
  
  constructor(
    private loginCheck: LoginCheckService,
    private _userService: UserServeService, 
    private router: Router
  ) { }

  private user = [];
  
  ngOnInit() {
    this._userService.getUserIdFromToken().subscribe(
      (res) => {
        if(res['admin']=='true'){this.router.navigate(['/user'])}
        else{this.router.navigate(['/eventlist'])}
      }
    )
    this.input = {
      username: '',
      password: ''
    };
  }
  onLogin() {
    this._userService.onLogin(this.input).subscribe(
      data => {
        localStorage.setItem('token', data.key)
        this._userService.getUserIdFromToken().subscribe(
          (res) => {
            localStorage.setItem('admin', res['admin'])
            localStorage.setItem('user_id', res['user_id'])
            console.log(localStorage)
            if (res['admin'] == true) { this.router.navigate(['/user']) }
            else { this.router.navigate(['/eventlist']) }
          },
          (err) => console.log('Cannot get user info with provided token onLogin-login.component.ts',err)
        );
      },
      error => {
        console.log('Cannot login with provided credentials onLogin-login.component.ts', error);
      }
    );
  }
  addUser() {
    this.router.navigate(['/useradd'])
  }
}
