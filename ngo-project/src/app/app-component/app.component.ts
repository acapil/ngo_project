import { Component } from '@angular/core';
import { UserServeService } from '../user-serve.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngo-project';
  adminCheck: boolean = (localStorage['admin'] == 'true');
  public loggedin: boolean = false;

  constructor(
    private _userService: UserServeService,
    private router: Router
  ) { }

  ngOnInit() {
    this._userService.getUserIdFromToken().subscribe(
      () => { this.loggedin = true },
      (err) => {
        this.loggedin = false
        console.log('Failed on ngOnInit-app.component.ts')
        console.log('Cannot verify token')
        console.log(err)
        this.router.navigate(['/login'])
      }
    )
  }

  onLogout() {
    this._userService.onLogout().subscribe(
      () => {
        this.router.navigate(['/login'])
      },
      (err) => {
        console.log('Error onLogout-users.component.ts', err)
        this.loggedin = false
        this.router.navigate(['/login'])
      }
    )
  }
}

