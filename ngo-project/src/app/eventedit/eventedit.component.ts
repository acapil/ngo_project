import { Component, OnInit } from '@angular/core';
import { UserServeService } from '../user-serve.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EventServeService } from '../event-serve.service';
import { AppComponent } from '../app-component/app.component';
import { LoginCheckService } from '../login-check.service';

@Component({
  selector: 'app-eventedit',
  templateUrl: './eventedit.component.html',
  styleUrls: ['./eventedit.component.css']
})
export class EventeditComponent implements OnInit {
  public events = [];
  public event = [];
  public uploadForm: FormGroup;
  public imageForm: FormGroup;
  public newImageForm: FormGroup;
  localImage: any[];
  constructor(
    private loginCheck: LoginCheckService,
    private _userService: UserServeService,
    private _eventService: EventServeService, 
    private route: ActivatedRoute,
    private router: Router, 
    private fb: FormBuilder
  ) { }
  
  private event_id = this.route.snapshot.paramMap.get('event_id');

  ngOnInit() {
    this.loginCheck.getLogin()

    this._userService.getUserIdFromToken().subscribe(
      (res) => {
        if(res['admin'] != 'true'){
          console.log('Failing on ngOnInit-eventedit.component.ts')
          console.log('Token doesnot belong to admin')
          this.router.navigate(['/error/' + 401])
        }
      },
      (err) => {
        console.log('Failing on ngOnInit-userview.component.ts')
        console.log('Cannot verify token')
        console.log(err['status'])
        console.log(err)
        this.router.navigate(['/error/' + err['status']])
      }
    )

    this._eventService.getEvent(this.event_id).subscribe(
      (data) => {
        this.event = data
        this.uploadForm = this.fb.group({
          event_name: [this.event['event_name']],
          category: [this.event['category']],
          location: [this.event['location']],
          start_time: [this.event['start_time']],
          end_time: [this.event['end_time']],
          description: [this.event['description']],
          adult_price: [this.event['adult_price']],
          kid_price: [this.event['kid_price']],
          image: [this.event['image']],
        })
      },
      (error) => {
        console.log('Failing on ngOnInit-eventedit.component.ts',error)
      }
    );

    this.newImageForm = this.fb.group({
      newimage: [],

    });
  }
  editEvent(formData) {
    const editForm = new FormData();
    if (this.newImageForm.get('newimage').value) {
      editForm.append('image', this.newImageForm.get('newimage').value);
    }
    editForm.append('user', this.event['user']);
    editForm.append('event_name', formData.event_name);
    editForm.append('category', formData.category);
    editForm.append('location', formData.location);
    editForm.append('start_time', formData.start_time);
    editForm.append('end_time', formData.end_time);
    editForm.append('description', formData.description);
    editForm.append('adult_price', formData.adult_price);
    editForm.append('kid_price', formData.kid_price);
    this._eventService.editEvent(editForm, this.event_id).subscribe(
      (res) => {
        this.router.navigate(['/eventmanage', {message:'Changed Event Successfully'}])
      },
      (err) => console.log(err)
    );
  }

  onUpload(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.newImageForm.get('newimage').setValue(file);
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.localImage = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0])
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

