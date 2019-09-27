import { Component, OnInit } from '@angular/core';
import { UserServeService } from '../user-serve.service';
import {Globals} from '../globals'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  input; 

  constructor(private _userService: UserServeService, private http:HttpClient, private _globals: Globals, private router: Router) { }
  private user = [];
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
        this.http.get<any>('http://127.0.0.1:8000/user/get_id/'+this._globals.key+'/').subscribe(
           (res) => { console.log('xxxx');
                      console.log(res['admin']);
                      console.log('xxxx');
                      if(res['admin']==true){this.router.navigate(['/user'])}
                      else{this.router.navigate(['/eventlist'])}
                      console.log(this._globals.key);
            
            
            //  this.user= res, console.log('xxx', res)
                    },
          (err) => console.log(err)
        );

        },
      error =>{
        console.log('error',error);
      }
    );
  }

}
