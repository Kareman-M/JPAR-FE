import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AngularMaterialModule } from './Shared/Libraries/angular-material/angular-material.module';

import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './pages/componants/home/home.component';
import { ApplicantRegisterComponent } from './auth/register/applicant-register/applicant-register.component';
import { RecruiterRegisterComponent } from './auth/register/recruiter-register/recruiter-register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ApplicantRegisterComponent,
    RecruiterRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
