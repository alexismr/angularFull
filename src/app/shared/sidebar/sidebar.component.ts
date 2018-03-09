import { Usuario } from './../../model/usuario.model';
import { SidebarService, UsuarioService } from './../../services/service.index';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

 usuario: Usuario;

  constructor(public _sidebarService: SidebarService , public _usuarioService: UsuarioService) { }



  ngOnInit() {
    this.usuario = this._usuarioService.usuario;
  }

}
