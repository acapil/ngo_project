import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app-component/app.component';
import { UsersComponent } from './users/users.component';
import { UserServeService } from './user-serve.service';
import { HttpClientModule } from '@angular/common/http';
import { EventServeService } from './event-serve.service';
import { EventRegistrationServeService } from './event-registration-serve.service';
import { EventsComponent } from './events/events.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { Globals } from './globals';
import { FormsModule } from '@angular/forms';
import { UserviewComponent } from './userview/userview.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule, routingComponents } from './app-component/app-routing.module';
import { EventdetailComponent } from './eventdetail/eventdetail.component';
import { UsersAddComponent } from './useradd/useradd.component';
import { EventnewComponent } from './eventnew/eventnew.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { UsereditComponent } from './useredit/useredit.component'; 

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EventsComponent,
    LoginComponent,
    EventRegistrationComponent,
    UserviewComponent,
    routingComponents,
    EventdetailComponent,
    UsersAddComponent,
    EventnewComponent,
    EventlistComponent,
    UsereditComponent

    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    //RouterModule.forRoot()
  ],
  providers: [UserServeService,EventServeService,EventRegistrationServeService,Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
