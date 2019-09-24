import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { UsersComponent } from './component/users/users.component';
import { UserServeService } from './user-serve.service';
import { HttpClientModule } from '@angular/common/http';
import { EditUserFormComponent } from './component/edit-user-form/edit-user-form.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EditUserFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserServeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
