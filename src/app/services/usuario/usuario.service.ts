import { Usuario } from './../../model/usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

@Injectable()
export class UsuarioService {

  constructor(public http: HttpClient) {
      console.log('Servicio crear usuario habilitado');
   }

  crearUsuario( usuario: Usuario) {
    let url = URL_SERVICIOS + '/usuario';
    return  this.http.post( url , usuario);
  }

}
