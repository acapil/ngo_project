import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';

import { UserServeService } from './user-serve.service';
import { HttpClientModule } from '@angular/common/http';

import { UsersComponent } from './component/users/users.component';
import { EventsComponent } from './component/event-list/events/events.component';
import { EventsManagementComponent } from './component/event-management/events-management/events-management.component';
import { EditUserFormComponent } from './component/users/edit-user-form/edit-user-form.component';
import { EventCardComponent } from './component/event-list/event-card/event-card.component';

// Material section
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EditUserFormComponent,
    EventsComponent,
    EventsManagementComponent,
    EventCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,

    // Material
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [UserServeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
