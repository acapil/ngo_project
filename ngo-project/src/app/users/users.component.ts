import { Component, OnInit } from '@angular/core';
import { UserServeService } from '../user-serve.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users = [];
  constructor(private _userService: UserServeService) { }

  ngOnInit() {
    this._userService.getUsers().subscribe(
      (data) => this.users = data,
      () => console.log('the sequence completed!')
    );
  }

}
