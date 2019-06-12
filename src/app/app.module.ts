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
import { PropietarioComponent } from './components/propietario/propietario.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { FichaUrbanaComponent, DatosLegalesPredioDialog, DatosComplementariosDialog, 
  AvaluoTerrenoUrbanoDialog, AvaluoEdificacionesDialog, DetallesNegocioDialog, CaracteristicasRuralesDialog,
  AgregarNegocioDialog } from './components/ficha-urbana/ficha-urbana.component';
import { PropietariosListComponent } from './components/propietarios-list/propietarios-list.component';

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
    DatosLegalesPredioDialog,
    DatosComplementariosDialog,
    AvaluoTerrenoUrbanoDialog,
    AvaluoEdificacionesDialog,
    PropietarioComponent,
    DetallesNegocioDialog,
    CaracteristicasRuralesDialog,
    AgregarNegocioDialog,
    PropietariosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [
    DatosLegalesPredioDialog,
    DatosComplementariosDialog,
    AvaluoTerrenoUrbanoDialog,
    AvaluoEdificacionesDialog,
    DetallesNegocioDialog,
    CaracteristicasRuralesDialog,
    AgregarNegocioDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
