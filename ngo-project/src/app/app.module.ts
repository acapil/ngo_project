import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { UsersComponent } from './users/users.component';
import { UserServeService } from './user-serve.service';
import { HttpClientModule } from '@angular/common/http';
import { EventServeService } from './event-serve.service';
import { EventRegistrationServeService } from './event-registration-serve.service';
import { EventsComponent } from './events/events.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EventsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserServeService,EventServeService,EventRegistrationServeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
