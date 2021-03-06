import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Users } from './users';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServeService {
  private _url: string = "http://127.0.0.1:8000/user/";
  constructor(private http: HttpClient) { }

getUsers(): Observable<Users[]>{
  return this.http.get<Users[]>(this._url);
}
onLogin(userData): Observable<any>{
  return this.http.post("http://127.0.0.1:8000/user/auth/login/",userData);
}
onDelete(user_id) {
  this.http.delete('http://127.0.0.1:8000/user/delete/' + user_id).subscribe(
    () => console.log('Success'),
    (err) => console.log(err)
    );
  return 'success'
}
errorHandler(error: HttpErrorResponse){
  return throwError(error.message || "Server Error");
  }
}