import { Component, OnInit } from '@angular/core';
import { UserServeService } from '../../user-serve.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users = [];
  constructor(private userService: UserServeService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (data) => this.users = data,
      () => console.log('the sequence completed!')
    );
  }

}
