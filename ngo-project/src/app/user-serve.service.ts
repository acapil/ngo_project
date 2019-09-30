import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Users } from './users';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Globals } from './globals'

@Injectable({
  providedIn: 'root'
})
export class UserServeService {
  private _url: string = "http://127.0.0.1:8000/user/";
  constructor(private http: HttpClient, private router: Router, private _globals: Globals) { }

  getUsers(): Observable<Users[]> {
    var header = new HttpHeaders().set('Authorization', 'Token ' + this._globals.key)
    console.log('xxx',this._globals.key)
    return this.http.get<Users[]>(this._url, { headers: header });
  }
  getUser(user_id): Observable<Users[]> {
    var header = new HttpHeaders().set('Authorization', 'Token ' + this._globals.key)
    return this.http.get<Users[]>(this._url + user_id, { headers: header });
  }
  onLogin(userData): Observable<any> {
    return this.http.post("http://127.0.0.1:8000/user/auth/login/", userData);
  }
  onDelete(user_id) {
    this.http.delete('http://127.0.0.1:8000/user/delete/' + user_id).subscribe(
      () => console.log('Success'),
      (err) => console.log(err)
    );
    return 'success'
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}