import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LogInComponent } from './components/log-in/log-in.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { LandingScreenComponent } from './component_two/landing-screen/landing-screen.component';
import { PersonalInfoComponent } from './component_two/personal-info/personal-info.component';
import { SignUpComponent } from './component_two/sign-up/sign-up.component';
import { VerifyOtpComponent } from './component_two/verify-otp/verify-otp.component';
import { BusinessInfoComponent } from './component_two/business-info/business-info.component';
import { ContactInfoComponent } from './component_two/contact-info/contact-info.component';
import { AccountInfoComponent } from './component_two/account-info/account-info.component';
import { BillingAndPreviewComponent } from './component_two/billing-and-preview/billing-and-preview.component';
import { ActivatedRoute } from '@angular/router';
import { ChangePasswordComponent } from './component_two/change-password/change-password.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthBarComponent } from './component_two/password-strength-bar/password-strength-bar.component';
import { NewDataFieldComponent } from './component_two/new-data-field/new-data-field.component';
import { AddJobRoleComponent } from './component_two/add-job-role/add-job-role.component';


@NgModule({
  declarations: [
    LogInComponent,
    WelcomePageComponent,
    LandingScreenComponent,
    PersonalInfoComponent,
    SignUpComponent,
    VerifyOtpComponent,
    BusinessInfoComponent,
    ContactInfoComponent,
    AccountInfoComponent,
    BillingAndPreviewComponent,
    PasswordStrengthBarComponent,
    ChangePasswordComponent,
    NewDataFieldComponent,
    AddJobRoleComponent,
    
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  exports: [
    PersonalInfoComponent,
    AccountInfoComponent,
    BillingAndPreviewComponent,
    PasswordStrengthBarComponent,
    ChangePasswordComponent,
    NewDataFieldComponent,
    AddJobRoleComponent
  ]
})
export class AuthenticationModule { }
