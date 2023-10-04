import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserPanelComponent } from './user-panel.component';


@NgModule({
  declarations: [
    UserPanelComponent,
    LoginComponent,
    SignInComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [UserPanelComponent],
})
export class UserPanelModule { }
