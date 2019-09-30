import { Component, OnInit } from '@angular/core';
import { UserServeService } from '../user-serve.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Globals} from '../globals'
@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css']
})
export class EventRegistrationComponent implements OnInit {

  constructor(private _userService: UserServeService, private router: Router, private http: HttpClient,private fb: FormBuilder,private _globals: Globals, private route: ActivatedRoute) { }
  private usid = 0;
  public uploadForm: FormGroup;
  id = parseInt(this.route.snapshot.paramMap.get('id'));
  ngOnInit() {
    this.http.get<any>('http://127.0.0.1:8000/user/get_id/'+this._globals.key+'/').subscribe(
           (data) => { this.usid=data.user_id;
                        console.log('xxxxxx',this.usid)
                    },
          (err) => console.log(err)
        );
    console.log('zzzzz',this.usid)
    this.uploadForm = this.fb.group({
      user:  [''],// [this._globals.usid],
      event: [''],// [this.id],
      first_name: [''],
      last_name: [''],
      email: [''],
      phone: [''],
      address: [''],
      quantity_adult: [''],
      quantity_kid: [''],
    });
  }
  onInsert1(formData) {
    console.log('yyyy',formData)
    formData.user = this.usid
    formData.event = this.id
    console.log('aaaa',this.usid)
    this.http.post<any>('http://127.0.0.1:8000/event_registration/new/', formData).subscribe(
      (res) => {console.log(res['total_price'])
                this.router.navigate(['/eventlist'])
      },
      (err) => console.log(err)
    );
  }
  

}
