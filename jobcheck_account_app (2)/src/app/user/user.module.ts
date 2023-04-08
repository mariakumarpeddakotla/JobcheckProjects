import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UserCardComponent,
    UserDashboardComponent,
    UserTableComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
