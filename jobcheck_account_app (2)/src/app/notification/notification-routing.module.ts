import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountNotificationComponent } from './components/account-notification/account-notification.component';

const routes: Routes = [
  {
    path:'account-notification',component:AccountNotificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationRoutingModule { }
