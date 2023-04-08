import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountFilterComponent } from './components/account-filter/account-filter.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path:'Dashboard', component:DashboardComponent},
  {path:'hhjgg', component:AccountFilterComponent}
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
