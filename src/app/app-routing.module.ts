import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

//imports de todos los componentes que van a estar incluidos en el Angular Router
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { FichaCatastralComponent } from './components/ficha-catastral/ficha-catastral.component';
import { FichaUrbanaComponent } from './components/ficha-urbana/ficha-urbana.component';
import { PropietarioComponent } from './components/propietario/propietario.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { MantenimientosComponent } from './components/mantenimientos/mantenimientos.component';

const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent,
    children: [
      
    ]
  },
  {
    path: 'modules', 
    component: PrincipalComponent
  },
  { 
    path: 'fichaCatastral', 
    component: FichaCatastralComponent 
  },
  { 
    path: '', 
    redirectTo: '/login', 
    pathMatch: 'full'
  },
  { 
    path: 'fichaUrbana', 
    component: FichaUrbanaComponent
  },
  { 
    path: 'propietario', 
    component: PropietarioComponent
  },
  {
    path: 'usuarios',
    component: EmpleadosComponent
  },
  {
    path: 'mantenimientos',
    component: MantenimientosComponent
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
