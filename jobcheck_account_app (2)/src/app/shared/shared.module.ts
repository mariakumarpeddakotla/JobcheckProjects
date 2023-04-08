import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComonent } from './components/header/header.component';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComonent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    SidebarComponent,
    HeaderComonent
  ]

})
export class SharedModule {
 }
