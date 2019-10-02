import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Events } from './events';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventServeService {
  private _url: string = "http://127.0.0.1:8000/event/";
  constructor(private http: HttpClient) { }

  getEvents(): Observable<Events[]> {
    var header = new HttpHeaders().set('Authorization', 'Token ' + localStorage['token'])
    return this.http.get<Events[]>(this._url, {headers: header});
  }
  getEvent(event_id): Observable<any> {
    var header = new HttpHeaders().set('Authorization', 'Token ' + localStorage['token'])
    return this.http.get<any>(this._url + event_id, {headers: header});
  }
  addNewEvent(formData){
    var header = new HttpHeaders().set('Authorization', 'Token ' + localStorage['token'])
    return this.http.post<any>(this._url + 'new/', formData, {headers: header})
  } 
  editEvent(formData, event_id){
    var header = new HttpHeaders().set('Authorization', 'Token ' + localStorage['token'])
    return this.http.patch<any>(this._url + 'edit/' + event_id, formData, {headers: header})
  }
  deleteEvent(event_id){
    var header = new HttpHeaders().set('Authorization', 'Token ' + localStorage['token'])
    return this.http.delete(this._url + 'delete/' + event_id, {headers: header})
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}