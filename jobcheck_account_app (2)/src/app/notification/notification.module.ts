import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';

import { SharedModule } from '../shared/shared.module';
import { AccountNotificationComponent } from './components/account-notification/account-notification.component';
import { JobNotificationComponent } from './components/job-notification/job-notification.component';
import { ProfileNotificationComponent } from './components/profile-notification/profile-notification.component';


@NgModule({
  declarations: [
    AccountNotificationComponent,
    JobNotificationComponent,
    ProfileNotificationComponent,
    
  ],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    SharedModule
  ]
})
export class NotificationModule { }
