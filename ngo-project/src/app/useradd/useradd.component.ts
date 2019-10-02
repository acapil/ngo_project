import { Component, OnInit } from '@angular/core';
import { UserServeService } from '../user-serve.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Globals } from '../globals'
import { AppComponent } from '../app-component/app.component';


@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css']
})

export class UsersAddComponent implements OnInit {
  public users = [];
  public uploadForm: FormGroup;
  constructor(
    private _appComponent: AppComponent,
    private _userService: UserServeService, 
    private router: Router, 
    private http: HttpClient,
    private fb: FormBuilder) { }

  ngOnInit() {
    this._userService.getUserIdFromToken().subscribe(
      () => { this._appComponent.loggedin = true },
      (err) => {
        this._appComponent.loggedin = false
        console.log('Failed on ngOnInit-useradd.component.ts')
        console.log('Cannot verify token')
        console.log(err)
        this.router.navigate(['/login'])
      }
    )
    this._userService.getUsers().subscribe(
      (data) => this.users = data,
      (err) => {
        console.log('Failing on ngOnInit-useradd.component.ts')
        console.log('Cannot get users',err)
      }
    );

    console.log(localStorage)
    this.uploadForm = this.fb.group({
      username: [''],
      password1: [''],
      password2: [''],
      email: ['']
    });
  }

  addNewUser(formData) {
    this.http.post<any>('http://127.0.0.1:8000/user/create/', formData).subscribe(
      (res) => {
        console.log(res);
        if(localStorage['admin']=='true'){this.router.navigate(['/user'])}
        else{this.router.navigate(['/login'])}
      },
      (err) => {
        console.log('Failing on addNewUser-useradd.component.ts')
        console.log('Cannot add new user',err)
      }
    );
  }
}

