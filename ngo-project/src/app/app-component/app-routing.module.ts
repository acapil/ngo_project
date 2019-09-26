import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { UsersComponent } from '../users/users.component';
import { EventsComponent } from '../events/events.component';
import { EventRegistrationComponent } from '../event-registration/event-registration.component';
import { UserviewComponent } from '../userview/userview.component';
import { EventdetailComponent } from '../eventdetail/eventdetail.component';
import { UsersAddComponent } from '../useradd/useradd.component';
import { EventnewComponent } from '../eventnew/eventnew.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UsersComponent },
  { path: 'eventmanage', component: EventsComponent },
  { path: 'eventdetail', component: EventdetailComponent },
  { path: 'userview', component: UserviewComponent },
  { path: 'eventreg', component: EventRegistrationComponent },
  { path: 'useradd', component: UsersAddComponent },
  { path: 'eventadd', component: EventnewComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, UsersComponent,EventsComponent,EventdetailComponent,
  UserviewComponent,EventRegistrationComponent,UsersAddComponent,EventnewComponent]
