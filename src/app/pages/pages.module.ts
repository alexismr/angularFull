
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


@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component],
        imports: [
            SheredModule,
            PAGES_ROUTES,
            FormsModule,
            ChartsModule
        ]

})

export class PagesModule { }

