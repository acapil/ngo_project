import { Component, OnInit } from '@angular/core';
import { UserServeService } from '../user-serve.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users = [];
  public uploadForm: FormGroup;
  constructor(private _userService: UserServeService, private http: HttpClient,private fb: FormBuilder) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (data) => this.users = data,
      () => console.log('the sequence completed!')
    );
    this.uploadForm = this.fb.group({
      username: [''],
      password1: [''],
      password2: [''],
      email: ['']
    });
  }
  onDelete(users_id) {
    this.http.delete('http://127.0.0.1:8000/user/delete/' + users_id).subscribe(
      (res) => console.log(res),
      (err) => alert(err)
      );
    return 'success';
  }
  onInsert(formData) {
    this.http.post<any>('http://127.0.0.1:8000/user/create/', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
  }

