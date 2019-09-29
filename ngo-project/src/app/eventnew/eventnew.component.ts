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
  public imageForm: FormGroup;
  constructor(private _userService: UserServeService, private router: Router, private http: HttpClient,private fb: FormBuilder) { }

  ngOnInit() {
    this._userService.getUsers().subscribe(
      (data) => this.events = data,
      () => console.log('the sequence completed!')
    );
    this.imageForm = this.fb.group({
      file: ['']
    });
    this.uploadForm = this.fb.group({
      user: [''],
      event_name: [''],
      category: [''],
      location: [''],
      start_time: [''],
      end_time: [''],
      description: [''],
      image:[''],
      adult_price: [''],
      kid_price: [''],
    });
  }
  onInsert1(formData) {
    const formData1 = new FormData();
    formData1.append('image', this.imageForm.get('file').value);
    formData1.append('user', formData.user);
    formData1.append('event_name', formData.event_name);
    formData1.append('category', formData.category);
    formData1.append('location', formData.locationr);
    formData1.append('start_time', formData.start_time);
    formData1.append('end_time', formData.end_time);
    formData1.append('description', formData.description);
    formData1.append('adult_price', formData.adult_price);
    formData1.append('kid_price', formData.kid_price);
    this.http.post<any>('http://127.0.0.1:8000/event/new/', formData1).subscribe(
      (res) => {console.log(res);
                this.router.navigate(['/eventmanage'])
      },
      (err) => console.log(err)
    );
  }
  onUpload(event){
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.imageForm.get('file').setValue(file);
      console.log('xxxx'+this.imageForm.get('file'))
    }
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

