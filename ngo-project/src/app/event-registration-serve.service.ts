import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventRegistrations } from './event-registrations';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventRegistrationServeService {
  private _url: string = "http://127.0.0.1:8000/event_registration/";
  constructor(private http: HttpClient) { }

  getEventRegs(): Observable<EventRegistrations[]> {

    return this.http.get<EventRegistrations[]>(this._url);
  }
  regEvent(formData) {
    return this.http.post<any>('http://127.0.0.1:8000/event_registration/new/', formData)
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}