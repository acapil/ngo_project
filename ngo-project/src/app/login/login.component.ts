import { Component, OnInit } from '@angular/core';
import { UserServeService } from '../user-serve.service';
import { Globals } from '../globals'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  input;

  constructor(private _userService: UserServeService, private http: HttpClient, private _globals: Globals, private router: Router) { }
  private user = [];
  
  ngOnInit() {
    this.input = {
      username: '',
      password: ''
    };
  }
  onLogin() {
    this._userService.onLogin(this.input).subscribe(
      data => {
        localStorage.setItem('token', data.key)
        this.http.get<any>('http://127.0.0.1:8000/user/get_id/' + localStorage['token'] + '/').subscribe(
          (res) => {
            localStorage.setItem('admin', data.key)
            localStorage.setItem('user_id', res['user_id'])
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
