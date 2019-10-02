import { Component, OnInit } from '@angular/core';
import { EventRegistrationServeService } from '../event-registration-serve.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServeService } from '../user-serve.service';
import { AppComponent } from '../app-component/app.component';
@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css']
})
export class EventRegistrationComponent implements OnInit {

  constructor(
    private _appComponent: AppComponent,
    private _userService: UserServeService,
    private _registrationService: EventRegistrationServeService, 
    private router: Router, 
    private fb: FormBuilder, 
    private route: ActivatedRoute
  ) {}
  
  public uploadForm: FormGroup;
  private event_id = parseInt(this.route.snapshot.paramMap.get('event_id'));
  ngOnInit() {
    this._userService.getUserIdFromToken().subscribe(
      () => { this._appComponent.loggedin = true },
      (err) => {
        this._appComponent.loggedin = false
        console.log('Failed on ngOnInit-event-registration.component.ts')
        console.log('Cannot verify token')
        console.log(err)
        this.router.navigate(['/login'])
      }
    )
    this.uploadForm = this.fb.group({
      user: [''],
      event: [''],
      first_name: [''],
      last_name: [''],
      email: [''],
      phone: [''],
      address: [''],
      quantity_adult: [''],
      quantity_kid: [''],
    });
  }
  regEvent(formData) {
    formData.user = localStorage['user_id']
    formData.event = this.event_id
    this._registrationService.regEvent(formData).subscribe(
      (res) => {
        console.log(res['total_price'])
        this.router.navigate(['/eventlist', {message: 'Register for event successfully, total price is $' + res['total_price']}])
      },
      (err) => console.log(err)
    );
  }


}
