import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngo-project';
  key;

  // navlogout() {
  //   var header = new HttpHeaders().set('Authorization', 'Token ' + this._globals.key)
  //   console.log('nink',this._globals.key)
  //   this.http.post<any>('http://127.0.0.1:8000/user/auth/logout/', null, {headers: header})
  //   this.router.navigate(['/login'])
  // }
}
