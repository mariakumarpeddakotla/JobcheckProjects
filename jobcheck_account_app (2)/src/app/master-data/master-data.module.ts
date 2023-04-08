import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterDataRoutingModule } from './master-data-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MasterDataSkillsComponent } from './components/master-data-skills/master-data-skills.component';
import { MasterdataDashboardComponent } from './components/masterdata-dashboard/masterdata-dashboard.component';
import { MasterdataLocationComponent } from './components/masterdata-location/masterdata-location.component';
import { MasterdataJobroleComponent } from './components/masterdata-jobrole/masterdata-jobrole.component';



@NgModule({
  declarations: [
            MasterDataSkillsComponent,
            MasterdataDashboardComponent,
            MasterdataLocationComponent,
            MasterdataJobroleComponent
  ],
  imports: [
    CommonModule,
    MasterDataRoutingModule,
    SharedModule

  ],
})
export class MasterDataModule { }
