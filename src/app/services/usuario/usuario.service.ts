import { Usuario } from './../../model/usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';

@Injectable()
export class UsuarioService {

usuario: Usuario;
token: string;

  constructor(public http: HttpClient, public router: Router , public _subirArchivo: SubirArchivoService ) {

      this.cargarStorage();
   }

guardarStorage(id: string , token: string , usuario: Usuario) {
  localStorage.setItem('id', id);
  localStorage.setItem('token', token);
  localStorage.setItem('usuario', JSON.stringify(usuario));
  this.usuario  = usuario ;
  this.token = token;

}

cargarStorage() {
    if ( localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse( localStorage.getItem('usuario') );
    } else {
      this.token = '';
      this.usuario = null;
    }
}

 login( usuario: Usuario , recordar: boolean = false) {

      if (recordar) {
        localStorage.setItem('email', usuario.email);
      } else {
        localStorage.removeItem('email');
      }
         let url = URL_SERVICIOS + '/login';
         return  this.http.post(url , usuario)
         .map( (resp: any) => {
          this.guardarStorage(resp.id, resp.token, resp.usuario);
          // localStorage.setItem('id',resp.id);
          //     localStorage.setItem('token',resp.token);
          //     localStorage.setItem('usuario', JSON.stringify(resp.usuario));
          this.guardarStorage(resp.id, resp.token, resp.usuario);
              return true;
         });
 }


 loginGoogle(token: string) {
   let url = URL_SERVICIOS + '/login/google';
   return this.http.post(url, { token})
   .map((resp: any) => {
    this.guardarStorage(resp.id, resp.token, resp.usuario);
    return true;
   });

 }



  crearUsuario( usuario: Usuario) {
    let url = URL_SERVICIOS + '/usuario';
    return  this.http.post( url , usuario)
    .map((resp: any) => {
      swal('usuario creado ', usuario.email, 'success');
       return resp.usuario;
    });
  }


estaLogueado() {
  return (this.token.length > 2) ? true : false;
}

logout() {
  this.usuario = null;
  this.token = '';
  localStorage.removeItem('token');
  localStorage.removeItem('usuario');
  this.router.navigate(['/login']);
}

actualizarUsuario( usuario: Usuario) {

let urlServicio = URL_SERVICIOS + '/usuario/' + usuario._id;
urlServicio += '?token=' + this.token;
return this.http.put( urlServicio , usuario)
.map( (resp: any ) => {
    let usuarioDB: Usuario = resp.usuario;
     this.guardarStorage(usuarioDB._id , this.token , usuarioDB);

      swal('Usuario actualizado', usuario.nombre , 'success');
      return true;
});


}



cambiarImagen( file: File , id: string) {
this._subirArchivo.subirArchivo(file , 'usuarios', id).then( (resp: any) => {
  this.usuario.img = resp.usuario.img;
  swal('Imagen Actualizada ' , this.usuario.nombre , 'success' );
  this.guardarStorage(id , this.token , this.usuario);
})
.catch( resp => {
   console.log(resp);
});
}


cargarUsuarios( desde: number = 0 ) {

  let url = URL_SERVICIOS + '/usuario?desde=' + desde;
  return this.http.get( url );

}

buscarUsuarios( termino: string ) {

  let url = URL_SERVICIOS + '/busqueda/coleccion/usuarios/' + termino;
  return this.http.get( url )
              .map( (resp: any) => resp.usuarios );

}

borrarUsuario( id: string ) {

  let url = URL_SERVICIOS + '/usuario/' + id;
  url += '?token=' + this.token;

  return this.http.delete( url )
              .map( resp => {
                swal('Usuario borrado', 'El usuario a sido eliminado correctamente', 'success');
                return true;
              });

}




}
