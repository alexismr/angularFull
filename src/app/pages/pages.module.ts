
import { SheredModule } from './../shared/shered.module';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

import {FormsModule} from '@angular/forms';
// graficas
import { ChartsModule } from 'ng2-charts';
// temporal
import { IncrementadorComponent } from './../components/incrementador/incrementador.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesaComponent } from './promesa/promesa.component';

// pipe module
import { PipesModule } from '../pipes/pipes.module';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';



@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccoutSettingsComponent,
        PromesaComponent,
        ProfileComponent,
        UsuariosComponent,
        ModalUploadComponent,
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component],
     imports: [
            CommonModule,
            SheredModule,
            PAGES_ROUTES,
            FormsModule,
            ChartsModule,
            PipesModule
        ],

})

export class PagesModule { }

