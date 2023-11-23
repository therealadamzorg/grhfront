import { NgModule, Component } from '@angular/core';
import { AppLayoutComponent } from './layout/app.layout.component';
import { MypageComponent } from './mypage/mypage.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { AjoutComponent } from './ajout/ajout.component';

const routes: Routes = [
    {
      path: '',
      component: AppLayoutComponent,
      children: [
        { path: 'constulgrh', component: CollaborateurComponent },
        { path: 'ajout', component: AjoutComponent },
      ]
    },
  { path: 'login', component: LoginComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
