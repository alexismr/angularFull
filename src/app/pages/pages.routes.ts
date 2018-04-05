import { ProfileComponent } from './profile/profile.component';
import { PromesaComponent } from './promesa/promesa.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { RouterModule,  Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { LoginGuardGuard } from '../services/service.index';
import { UsuariosComponent } from './usuarios/usuarios.component';


const appPagesRouter: Routes = [
  { path: '',
    component: PagesComponent,
    canActivate: [LoginGuardGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent, data: {titulo : 'Dashbaoard'}},
      { path: 'progress', component: ProgressComponent , data: {titulo : 'progress'}},
      { path: 'graficas1', component: Graficas1Component , data: {titulo : 'graficas'}},
      { path: 'promesas', component: PromesaComponent, data: {titulo : 'promesas'}},
      { path: 'account-settings', component: AccoutSettingsComponent , data: {titulo : 'Ajustes  del Tema'}},
      { path: 'perfil', component: ProfileComponent , data: {titulo : 'Perfil de Usuario'}},
      // mantenimiento 

      { path: 'usuarios', component: UsuariosComponent , data: {titulo : 'Mantenimientos Usuarios'}},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'}

    ]
   }
];

export const PAGES_ROUTES = RouterModule.forChild(appPagesRouter);

