import { Component, OnInit } from '@angular/core';
import { UserServeService } from '../user-serve.service';
import {Globals} from '../globals'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  input;
  constructor(private _userService: UserServeService, private _globals: Globals) { }

  ngOnInit() {
    this.input={
      username: '',
      password:''
    };
  }
  onLogin(){
    this._userService.onLogin(this.input).subscribe(
      data => {
        this._globals.key=data.key;
        console.log(this._globals.key);
      },
      error =>{
        console.log('error',error);
      }
    );
  }

}
