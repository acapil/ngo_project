import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  code = parseInt(this.route.snapshot.paramMap.get('code'));
  private message
  private error_message = {
    '400': 'Bad Request 400',
    '401': 'Not Authorized 401',
    '404': 'Not Found 404',
  }
  ngOnInit() {
    this.message = this.error_message[this.code.toString()]
  }

}
