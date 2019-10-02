import { Component, OnInit } from '@angular/core';
import { EventServeService } from '../event-serve.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServeService } from '../user-serve.service';
import { AppComponent } from '../app-component/app.component';

@Component({
  selector: 'app-eventnew',
  templateUrl: './eventnew.component.html',
  styleUrls: ['./eventnew.component.css']
})
export class EventnewComponent implements OnInit {
  public events = [];
  public uploadForm: FormGroup;
  public imageForm: FormGroup;
  constructor(
    private _appComponent: AppComponent,
    private _userService: UserServeService,
    private _eventService: EventServeService, 
    private router: Router, 
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this._userService.getUserIdFromToken().subscribe(
      () => { this._appComponent.loggedin = true },
      (err) => {
        this._appComponent.loggedin = false
        console.log('Failed on ngOnInit-eventnew.component.ts')
        console.log('Cannot verify token')
        console.log(err)
        this.router.navigate(['/login'])
      }
    )
    this.imageForm = this.fb.group({
      file: ['']
    });
    this.uploadForm = this.fb.group({
      event_name: [''],
      category: [''],
      location: [''],
      start_time: [''],
      end_time: [''],
      description: [''],
      image: [''],
      adult_price: [''],
      kid_price: [''],
    });
  }
  addNewEvent(formData) {
    const formData1 = new FormData();
    formData1.append('image', this.imageForm.get('file').value);
    formData1.append('user', localStorage['user_id']);
    formData1.append('event_name', formData.event_name);
    formData1.append('category', formData.category);
    formData1.append('location', formData.location);
    formData1.append('start_time', formData.start_time);
    formData1.append('end_time', formData.end_time);
    formData1.append('description', formData.description);
    formData1.append('adult_price', formData.adult_price);
    formData1.append('kid_price', formData.kid_price);
    this._eventService.addNewEvent(formData1).subscribe(
      (res) => {
        this.router.navigate(['/eventmanage', {message: 'Add event successfully'}])
      },
      (err) => {
        console.log('Failing on addNewEvent-eventnew.component.ts',err)
        this.router.navigate(['/eventmanage'])
      }
    );
  }
  onUpload(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.imageForm.get('file').setValue(file);
    }
  }
  navuser() {
    this.router.navigate(['/user'])
  }
  navevent() {
    this.router.navigate(['/eventmanage'])
  }
  navuserv() {
    this.router.navigate(['/userview'])
  }

}

