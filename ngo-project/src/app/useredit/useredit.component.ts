import { Component, OnInit } from '@angular/core';
import { UserServeService } from '../user-serve.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {
  public users = [];
  public uploadForm: FormGroup;
  id = parseInt(this.route.snapshot.paramMap.get('id'));
  constructor(private _userService: UserServeService, private router: Router, private http: HttpClient,private fb: FormBuilder,private route:ActivatedRoute) { }

  ngOnInit() {
    this._userService.getUsers().subscribe(
      (data) => this.users = data,
      () => console.log('the sequence completed!')
    );
    this.uploadForm = this.fb.group({
      first_name: [''],
      last_name: [''],
      email: [''],
      admin: ['']
    });
  }
  onInsert1(formData) {
    this.http.patch<any>('http://127.0.0.1:8000/user/change/'+this.id, formData).subscribe(
      (res) => {this.router.navigate(['/user'])
      },
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
 
  }

