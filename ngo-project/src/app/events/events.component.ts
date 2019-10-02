import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventServeService } from '../event-serve.service';
import { UserServeService } from '../user-serve.service';
import { AppComponent } from '../app-component/app.component';
import { LoginCheckService } from '../login-check.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public events = [];
  public uploadForm: FormGroup;

  constructor(
    private loginCheck: LoginCheckService,
    private _eventService: EventServeService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) { }

  private message = this.route.snapshot.paramMap.get('message');

  ngOnInit() {
    this.loginCheck.getLogin()

    if (localStorage['admin'] == 'true') {
      this._eventService.getEvents().subscribe(
        (data) => this.events = data,
        (err) => {
          console.log('Failing on ngOnInit-events.component.ts')
          console.log('Cannot get events')
          console.log(err)
          console.log(err['status'])
          this.router.navigate(['/error/' + err['status']])
        }
      )
    }
    else {
      console.log('Failing on ngOnInit-events.component.ts')
      console.log('Cannot get through authorization')
      this.router.navigate(['/error/' + 404])
    }

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
  onDelete(event_id) {
    this._eventService.deleteEvent(event_id).subscribe(
      (res) => {
        console.log(res);
        location.reload()
      },
      (err) => {
        console.log('Failing on onDelete-events.component.ts')
        console.log(err)
        location.reload()
      }
    );
  }
  onEdit(event_id) {
    this.router.navigate(['/eventedit/' + event_id])
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
  addEvent() {
    this.router.navigate(['/eventadd'])
  }
}
