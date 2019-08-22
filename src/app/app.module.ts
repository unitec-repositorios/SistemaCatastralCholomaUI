import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CustomMaterialModule } from './material.module';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';

//components
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { FichaCatastralComponent } from './components/ficha-catastral/ficha-catastral.component';
import { PropietarioComponent, AddPropietarioDialog } from './components/propietario/propietario.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { FichaUrbanaComponent } from './components/ficha-urbana/ficha-urbana.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';

//importar el http module para poder usar HTTP Client
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    FichaCatastralComponent,
    MainNavbarComponent,
    FichaUrbanaComponent,
    PropietarioComponent,
    EmpleadosComponent,
    AddPropietarioDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [
    AddPropietarioDialog
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
