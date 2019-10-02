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
  
  constructor(private http: HttpClient, private router: Router, private _globals: Globals) { 
  }

  getUsers(): Observable<Users[]> {
    var header = new HttpHeaders().set('Authorization', 'Token ' + localStorage['token'])
    return this.http.get<Users[]>(this._url, { headers: header });
  }
  getUser(user_id): Observable<Users[]> {
    var header = new HttpHeaders().set('Authorization', 'Token ' + localStorage['token'])
    return this.http.get<Users[]>(this._url + user_id, { headers: header });
  }
  getUserIdFromToken(): Observable<Users[]> {
    var header = new HttpHeaders().set('Authorization', 'Token ' + localStorage['token'])
    return this.http.get<any>('http://127.0.0.1:8000/user/get_id/', { headers: header })
  }
  onLogin(userData): Observable<any> {
    localStorage.clear()
    return this.http.post("http://127.0.0.1:8000/user/auth/login/", userData);
  }
  onLogout(): Observable<any> {
    var header = new HttpHeaders().set('Authorization', 'Token ' + localStorage['token'])
    localStorage.clear()
    return this.http.post("http://127.0.0.1:8000/user/auth/logout/", null, { headers: header });
  }
  onEdit(formData, user_id){
    var header = new HttpHeaders().set('Authorization', 'Token ' + localStorage['token'])
    return this.http.patch<any>('http://127.0.0.1:8000/user/change/' + user_id, formData, {headers: header})
  }
  onDelete(user_id) {
    var header = new HttpHeaders().set('Authorization', 'Token ' + localStorage['token'])
    return this.http.delete('http://127.0.0.1:8000/user/delete/' + user_id, {headers: header}) 
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}