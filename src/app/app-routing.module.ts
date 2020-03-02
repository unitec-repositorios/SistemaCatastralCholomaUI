import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

//imports de todos los componentes que van a estar incluidos en el Angular Router
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { FichaCatastralComponent } from './components/ficha-catastral/ficha-catastral.component';
import { FichaUrbanaComponent } from './components/ficha-urbana/ficha-urbana.component';
import { FichasRuralComponent } from './components/ficha-rural/ficha-rural.component';
import { PropietarioComponent } from './components/propietario/propietario.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { FichasComponent } from './components/fichas/fichas.component';
import { MantenimientosComponent } from './components/mantenimientos/mantenimientos.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';

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
    pathMatch: 'full'
  },
  { 
    path: 'fichaUrbana', 
    component: FichaUrbanaComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'fichaRural', 
    component: FichasRuralComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'fichas', 
    component: FichasComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'propietario', 
    component: PropietarioComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'usuarios',
    component: EmpleadosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'mantenimientos',
    component: MantenimientosComponent,
    canActivate: [AuthGuard]
  }
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
