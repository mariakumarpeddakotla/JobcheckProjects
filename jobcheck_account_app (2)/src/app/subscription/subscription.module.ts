import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionRoutingModule } from './subscription-routing.module';
import { ManagementComponent } from './components/management/management.component';
import { AddSubscriptionComponent } from './components/add-subscription/add-subscription.component';
import { ViewSubscriptionComponent } from './components/view-subscription/view-subscription.component';
import {SubscriptionComponent} from './components/subscription-dashboard/subscription.component'
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ManagementComponent,
    AddSubscriptionComponent,
    ViewSubscriptionComponent,
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    SubscriptionRoutingModule,
    SharedModule,
    
  ]
})
export class SubscriptionModule { }
