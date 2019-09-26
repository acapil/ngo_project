import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { UsersComponent } from './component/users/users.component';
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

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EventsComponent,
    LoginComponent,
    EventRegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserServeService,EventServeService,EventRegistrationServeService,Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
