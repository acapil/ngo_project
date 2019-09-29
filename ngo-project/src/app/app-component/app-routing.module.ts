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
import { EventlistComponent } from '../eventlist/eventlist.component';
import { UsereditComponent } from '../useredit/useredit.component';
import { EventeditComponent } from '../eventedit/eventedit.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UsersComponent },
  { path: 'eventmanage', component: EventsComponent },
  { path: 'eventdetail/:id', component: EventdetailComponent },
  { path: 'userview', component: UserviewComponent },
  { path: 'eventreg/:id', component: EventRegistrationComponent },
  { path: 'useradd', component: UsersAddComponent },
  { path: 'eventadd', component: EventnewComponent },
  { path: 'eventlist', component: EventlistComponent },
  { path: 'useredit/:id', component: UsereditComponent },
  { path: 'eventedit/:id', component: EventeditComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,UsereditComponent,EventeditComponent,UsersComponent,EventsComponent,EventdetailComponent,
  UserviewComponent,EventRegistrationComponent,UsersAddComponent,EventnewComponent,EventlistComponent]
