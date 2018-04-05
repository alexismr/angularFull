import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
// rutas
import { APP_ROUTES } from './app.routes';
// modulos
import { PagesModule } from './pages/pages.module';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// servicios

import { ServiceModule } from './services/service.module';
import { DialogModule } from './shared/modal/dialog.module';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
