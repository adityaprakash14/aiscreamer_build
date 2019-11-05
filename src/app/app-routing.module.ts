import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component'; 
import {RecruiterdashboardComponent} from './recruiterdashboard/recruiterdashboard.component'; 
import {UploadprofileComponent} from './uploadprofile/uploadprofile.component'; 


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'recruiterdashboard', component: RecruiterdashboardComponent },
  { path: 'UploadprofileComponent', component: UploadprofileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
