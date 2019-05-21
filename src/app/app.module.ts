import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CustomMaterialModule } from './material.module';

import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { FichaCatastralComponent } from './components/ficha-catastral/ficha-catastral.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { FichaUrbanaComponent } from './components/ficha-urbana/ficha-urbana.component';

//importar el http module para poder usar HTTP Client
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    FichaCatastralComponent,
    MainNavbarComponent,
    FichaUrbanaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
