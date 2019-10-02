import { Component, OnInit } from '@angular/core';
import { UserServeService } from '../user-serve.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app-component/app.component';


@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {
  public users = [];
  public uploadForm: FormGroup;
  private user_id = parseInt(this.route.snapshot.paramMap.get('user_id'));
  constructor(
    private _appComponent: AppComponent,
    private _userService: UserServeService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._userService.getUserIdFromToken().subscribe(
      () => { this._appComponent.loggedin = true },
      (err) => {
        this._appComponent.loggedin = false
        console.log('Failed on ngOnInit-useredit.component.ts')
        console.log('Cannot verify token')
        console.log(err)
        this.router.navigate(['/login'])
      }
    )

    this._userService.getUser(this.user_id).subscribe(
      (data) => {
        this.users = data
        this.uploadForm = this.fb.group({
          first_name: [this.users['first_name']],
          last_name: [this.users['last_name']],
          email: [this.users['email']],
          admin: [this.users['admin']]
        })
      },
      (err) => {
        console.log('Failing on ngOnInit-useredit.component.ts')
        console.log('Cannot get user')
        console.log(err)
        console.log(err['status'])
        this.router.navigate(['/error/' + err['status']])
      }
    );
  }
  editUserInfo(formData) {
    this._userService.onEdit(formData, this.user_id).subscribe(
      (res) => {
        this.router.navigate(['/user', { message: 'Edit user successfully' }])
      },
      (err) => {
        console.log('Failing on editUserInfo-useredit.component.ts')
        console.log('Cannot edit user info')
        console.log(err['status'])
        console.log(err)
        this.router.navigate(['/error/' + err['status']])
      }
    );
  }
}

