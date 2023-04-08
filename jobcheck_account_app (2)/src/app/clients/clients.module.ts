import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { EditClientComponent } from './Components/edit-client/edit-client.component';
import { AddClientComponent } from './Components/add-client/add-client.component';
import { ClientProfileComponent } from './Components/client-profile/client-profile.component';
import { ClientHomeComponent } from './Components/client-home/client-home.component';
import { SharedModule } from '../shared/shared.module';
import { ViewClientsComponent } from './Components/view-clients/view-clients.component';

@NgModule({
  declarations: [
    EditClientComponent,
    AddClientComponent,
    ClientProfileComponent,
    ClientHomeComponent,
    ViewClientsComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
   
  ]

 

})
export class ClientsModule { }
