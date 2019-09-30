import { Component, OnInit } from '@angular/core';
import { UserServeService } from '../user-serve.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Globals } from '../globals'


@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css']
})
export class UsersAddComponent implements OnInit {
  public users = [];
  public uploadForm: FormGroup;
  constructor(private _userService: UserServeService, private router: Router, private _globals: Globals, private http: HttpClient,private fb: FormBuilder) { }

  ngOnInit() {
    this._userService.getUsers().subscribe(
      (data) => this.users = data,
      () => console.log('the sequence completed!')
    );
    this.uploadForm = this.fb.group({
      username: [''],
      fname: [''],
      lname: [''],
      password1: [''],
      password2: [''],
      email: ['']
    });
  }
  onInsert1(formData) {
    this.http.post<any>('http://127.0.0.1:8000/user/create/', formData).subscribe(
      (res) => {console.log(res);
                if(this._globals.admin){this.router.navigate(['/user'])}
                else{this.router.navigate(['/login'])}
      },
      (err) => console.log(err)
    );
  }
  navuser(){
    this.router.navigate(['/user'])
  }
  navevent(){
    this.router.navigate(['/eventmanage'])
  }
  navuserv(){
    this.router.navigate(['/userview'])
  }
 
  }

