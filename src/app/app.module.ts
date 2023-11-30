import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppLayoutModule } from './layout/app.layout.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MypageComponent } from './mypage/mypage.component';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { LoginComponent } from './login/login.component';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';
import { AjoutComponent } from './ajout/ajout.component';
import { DropdownModule } from 'primeng/dropdown'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { FileUploadModule } from 'primeng/fileupload';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    MypageComponent,
    LoginComponent,
    CollaborateurComponent,
    AjoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    TriStateCheckboxModule,
    CheckboxModule,
    PasswordModule,
    DividerModule,
    ButtonModule,
    FieldsetModule,
    TableModule,
    DropdownModule,
    FormsModule,
    CalendarModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    FileUploadModule,
    RadioButtonModule,
    ReactiveFormsModule,
    CommonModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
