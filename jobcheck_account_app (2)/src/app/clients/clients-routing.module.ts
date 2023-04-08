import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './Components/add-client/add-client.component';
import { ClientHomeComponent } from './Components/client-home/client-home.component';
import { ClientProfileComponent } from './Components/client-profile/client-profile.component';
import { EditClientComponent } from './Components/edit-client/edit-client.component';
import { ViewClientsComponent } from './Components/view-clients/view-clients.component';

const routes: Routes = [
  {path:'client-profile', component:ClientProfileComponent},
  {path:'add-client', component:AddClientComponent},

  {path:'Edit-client', component:EditClientComponent},
  {path:'client-table', component:ViewClientsComponent},

  {path:'client-home', component:ClientHomeComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
