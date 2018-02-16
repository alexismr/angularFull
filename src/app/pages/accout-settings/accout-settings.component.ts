import { SettingsService } from './../../services/service.index';
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';


@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: []
})
export class AccoutSettingsComponent implements OnInit {

  constructor( public _ajustesService: SettingsService  ) { }

  ngOnInit() {

  }

  cambiarcolor(colorTema: string) {
   this._ajustesService.aplicarTema(colorTema);

  }




}
