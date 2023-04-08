import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewDataFieldComponent } from './new-data/new-data-field/new-data-field.component';
import { AddJobRoleComponent } from './add_Job_role/add-job-role/add-job-role.component';

@NgModule({
  declarations: [
    AppComponent,
    NewDataFieldComponent,
    AddJobRoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
