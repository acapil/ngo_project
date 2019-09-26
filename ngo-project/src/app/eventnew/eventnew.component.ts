import { Component, OnInit } from '@angular/core';
import { UserServeService } from '../user-serve.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventnew',
  templateUrl: './eventnew.component.html',
  styleUrls: ['./eventnew.component.css']
})
export class EventnewComponent implements OnInit {
  public events = [];
  public uploadForm: FormGroup;
  constructor(private _userService: UserServeService, private router: Router, private http: HttpClient,private fb: FormBuilder) { }

  ngOnInit() {
    this._userService.getUsers().subscribe(
      (data) => this.events = data,
      () => console.log('the sequence completed!')
    );
    this.uploadForm = this.fb.group({
      user: [''],
      event_name: [''],
      category: [''],
      location: [''],
      start_time: [''],
      end_time: [''],
      description: [''],
      adult_price: [''],
      kid_price: [''],

    });
  }
  onInsert1(formData) {
    this.http.post<any>('http://127.0.0.1:8000/event/new/', formData).subscribe(
      (res) => {console.log(res);
                this.router.navigate(['/eventmanage'])
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

