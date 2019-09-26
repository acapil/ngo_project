import { Component, OnInit } from '@angular/core';
import { EventServeService } from '../event-serve.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public events = [];
  public uploadForm: FormGroup;
  constructor(private _eventService: EventServeService,private router:Router,private http:HttpClient,private fb: FormBuilder) { }

  ngOnInit() {
    this._eventService.getEvents().subscribe(
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
  onDelete(e_id) {
    this.http.delete('http://127.0.0.1:8000/event/delete/' + e_id).subscribe(
      (res) =>{ console.log(res);
                location.reload()
      },
      (err) => alert(err)
      
      );
    return 'success'
  }
  onInsert(formData) {
    this.http.post<any>('http://127.0.0.1:8000/event/new/', formData).subscribe(
      (res) => console.log(res),
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
  addEvent(){
    this.router.navigate(['/eventadd'])
  }

}
