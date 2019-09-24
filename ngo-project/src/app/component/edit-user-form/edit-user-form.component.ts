import { Component, OnInit , Input} from '@angular/core';
import {Hero} from './hero';
import { FormsModule } from '@angular/forms';
import { UserServeService } from '../../user-serve.service';

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.css'],
})

export class EditUserFormComponent implements OnInit {
  public users = [];
  constructor(private userService: UserServeService) { }

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }
  newHero() {
    this.model = new Hero(42, '', '');
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (data) => this.users = data,
      () => console.log('the sequence completed!')
    );
  }
}
