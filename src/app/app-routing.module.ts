import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//imports de todos los componentes que van a estar incluidos en el Angular Router
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { FichaCatastralComponent } from './components/ficha-catastral/ficha-catastral.component';
import { FichaUrbanaComponent } from './components/ficha-urbana/ficha-urbana.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'modules', component: PrincipalComponent },
  { path: 'fichaCatastral', component: FichaCatastralComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'fichaUrbana', component: FichaUrbanaComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
