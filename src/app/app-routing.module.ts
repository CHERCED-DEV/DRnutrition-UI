import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './common/pages/home/home.component';
import { AboutComponent } from './common/pages/about/about.component';
import { LoginComponent } from './common/pages/members/login/login.component';
import { MemberComponent } from './common/pages/members/member/member.component';
import { ConfigsComponent } from './common/pages/members/configs/configs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'members',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'member', component: MemberComponent },
      { path: 'configs', component: ConfigsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
