import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterDataSkillsComponent } from './components/master-data-skills/master-data-skills.component';
import { MasterdataDashboardComponent } from './components/masterdata-dashboard/masterdata-dashboard.component';

const routes: Routes = [
  {path:'data-dashboard', component:MasterdataDashboardComponent},
  {path:'MasterData-skills', component:MasterDataSkillsComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterDataRoutingModule { }
