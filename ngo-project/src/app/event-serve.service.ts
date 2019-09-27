import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Events } from './events';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventServeService {
  private _url: string = "http://127.0.0.1:8000/event/";
  constructor(private http: HttpClient) { }

getEvents(): Observable<Events[]>{

  return this.http.get<Events[]>(this._url);
}
getEvent(num): Observable<any>{

  return this.http.get<any>("http://127.0.0.1:8000/event/"+num);
}
errorHandler(error: HttpErrorResponse){
  return throwError(error.message || "Server Error");
  }
}