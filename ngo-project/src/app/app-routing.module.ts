import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'events',
    loadChildren: './component/event-list/event-list.module#EventListModule'
  },
  {
    path: 'event-management',
    loadChildren: './component/event-management/event-management.module#EventManagementModule'
  },
  {
    path: 'users',
    loadChildren: './component/users/users.module#UsersModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
