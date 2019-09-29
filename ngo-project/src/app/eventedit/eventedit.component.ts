import { Component, OnInit } from '@angular/core';
import { UserServeService } from '../user-serve.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eventedit',
  templateUrl: './eventedit.component.html',
  styleUrls: ['./eventedit.component.css']
})
export class EventeditComponent implements OnInit {
  public newImageCheck = false;
  public events = [];
  public event = [];
  public uploadForm: FormGroup;
  public imageForm: FormGroup;
  public newImageForm: FormGroup;
  localImage: any[];
  constructor(private route: ActivatedRoute, private _userService: UserServeService, private router: Router, private http: HttpClient, private fb: FormBuilder) { }
  id = parseInt(this.route.snapshot.paramMap.get('id'));

  ngOnInit() {
    this.http.get<any>('http://127.0.0.1:8000/event/' + this.id).subscribe(
      (data) => {
        this.event = data,
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
      (error) => console.log(error)
    );

    this.newImageForm = this.fb.group({
      newimage: [],

    }),


      this._userService.getUsers().subscribe(
        (data) => this.events = data,
        () => console.log('the sequence completed!')
      );
  }
  onInsert1(formData) {
    const formData1 = new FormData();
    formData1.append('image', this.newImageForm.get('newimage').value);
    formData1.append('user', this.event['user']);
    formData1.append('event_name', formData.event_name);
    formData1.append('category', formData.category);
    formData1.append('location', formData.location);
    formData1.append('start_time', formData.start_time);
    formData1.append('end_time', formData.end_time);
    formData1.append('description', formData.description);
    formData1.append('adult_price', formData.adult_price);
    formData1.append('kid_price', formData.kid_price);
    this.http.patch<any>('http://127.0.0.1:8000/event/edit/' + this.id, formData1).subscribe(
      (res) => {
        this.router.navigate(['/eventmanage'])
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
      this.newImageCheck = true
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

