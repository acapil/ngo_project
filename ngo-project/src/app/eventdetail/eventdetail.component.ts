import { Component, OnInit } from '@angular/core';
import { EventServeService } from '../event-serve.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.component.html',
  styleUrls: ['./eventdetail.component.css']
})
export class EventdetailComponent implements OnInit {

  public event = [];
  constructor(private _eventService: EventServeService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    var id = parseInt(this.route.snapshot.paramMap.get('id'));
    this._eventService.getEvent(id).subscribe(
      (data) => this.event = data,
      () => console.log('the sequence completed!')
    );
  }
  reg(id){
      this.router.navigate(['/eventreg/'+id]);
    }
  }
