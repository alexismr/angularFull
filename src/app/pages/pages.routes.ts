import { PromesaComponent } from './promesa/promesa.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { RouterModule,  Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';


const appPagesRouter: Routes = [
  { path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: {titulo : 'Dashbaoard'}},
      { path: 'progress', component: ProgressComponent , data: {titulo : 'progress'}},
      { path: 'graficas1', component: Graficas1Component , data: {titulo : 'graficas'}},
      { path: 'promesas', component: PromesaComponent, data: {titulo : 'promesas'}},
      { path: 'account-settings', component: AccoutSettingsComponent , data: {titulo : 'Ajustes  del Tema'}},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'}

    ]
   }
];

export const PAGES_ROUTES = RouterModule.forChild(appPagesRouter);

