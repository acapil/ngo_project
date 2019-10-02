import { Component, OnInit } from '@angular/core';
import { UserServeService } from '../user-serve.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app-component/app.component';
import { LoginCheckService } from '../login-check.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users = [];
  public uploadForm: FormGroup;
  private adminCheck = (localStorage['admin'] == 'true');

  constructor(
    private loginCheck: LoginCheckService,
    private _userService: UserServeService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  private message = this.route.snapshot.paramMap.get('message');

  ngOnInit() {
    this.loginCheck.getLogin()

    this._userService.getUsers().subscribe(
      (data) => {
        this.users = data
      },
      (err) => {
        console.log('Failing on ngOnInit-users.component.ts')
        console.log('Cannot get users')
        console.log(err['status'])
        console.log(err)
        this.router.navigate(['/error/' + err['status']])
      }
    );
    this.uploadForm = this.fb.group({
      username: [''],
      password1: [''],
      password2: [''],
      email: ['']
    });
  }
  onLogout() {
    this._userService.onLogout().subscribe(
      () => {
        this.router.navigate(['/login'])
      },
      (err) => {
        console.log('Error onLogout-users.component.ts', err)
        this.router.navigate(['/login'])
      }
    )
  }
  addUser() {
    this.router.navigate(['/useradd'])
  }
  onEdit(users_id) {
    this.router.navigate(['/useredit/' + users_id])
  }

  onDelete(users_id) {
    this._userService.onDelete(users_id).subscribe(
      (res) => {
        this.router.navigate(['/user',])
      },
      (err) => {
        console.log('Failing on onDelete-users.component.ts')
        console.log(err)
        this.router.navigate(['/error/' + err['status']])
      }
    );
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

