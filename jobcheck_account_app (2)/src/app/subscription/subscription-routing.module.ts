import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionComponent } from './components/subscription-dashboard/subscription.component';
import { ViewSubscriptionComponent } from './components/view-subscription/view-subscription.component';

const routes: Routes = [
{
  path:'subscription-dashboard', component:SubscriptionComponent
},
{
  path:'view-subscription', component:ViewSubscriptionComponent
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionRoutingModule { }
