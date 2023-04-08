import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComonent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [
  {path:"header_account", component:HeaderComonent},
  {path:"sidebar_account", component:SidebarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
