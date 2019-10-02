import { Injectable } from '@angular/core';
import { UserServeService } from './user-serve.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginCheckService {

  private _isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoggedIn: Observable<boolean> = this._isLoggedIn.asObservable();
  private _isAdmin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAdmin: Observable<boolean> = this._isAdmin.asObservable();


  constructor(private _userService: UserServeService) { }
  getLogin() {
    this._userService.getUserIdFromToken().subscribe(
      () => { this._isLoggedIn.next(true) },
      (err) => {
        this._isLoggedIn.next(false)
        console.log('Failed on getLogin-login-check.service.ts')
        console.log(err)
      }
    )
    this._isAdmin.next(localStorage['admin']=='true')
  }
  changeToLogout() {
        this._isLoggedIn.next(false) 
  }
}
