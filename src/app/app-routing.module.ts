import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

//imports de todos los componentes que van a estar incluidos en el Angular Router
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { FichaCatastralComponent } from './components/ficha-catastral/ficha-catastral.component';
import { FichaUrbanaComponent } from './components/ficha-urbana/ficha-urbana.component';
import { PropietarioComponent } from './components/propietario/propietario.component';

const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent,
    children: [
      
    ]
  },
  {
    path: 'modules', 
    component: PrincipalComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'fichaCatastral', 
    component: FichaCatastralComponent, 
    canActivate: [AuthGuard]
  },
  { 
    path: '', 
    redirectTo: '/login', 
    pathMatch: 'full', 
    canActivate: [AuthGuard] },
  { 
    path: 'fichaUrbana', 
    component: FichaUrbanaComponent, 
    canActivate: [AuthGuard]
  },
  { 
    path: 'propietario', 
    component: PropietarioComponent, 
    canActivate: [AuthGuard]},
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
