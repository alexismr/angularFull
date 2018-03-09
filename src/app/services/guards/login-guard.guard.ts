import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';


@Injectable()
export class LoginGuardGuard implements CanActivate {

  constructor( public _usuarioServices: UsuarioService ,  public router: Router){

  }

  canActivate() {
    if ( this._usuarioServices.estaLogueado() ) {
      console.log( 'PASO EL GUARD');
      return true;
    } else {
      console.log( 'Bloqueado por guard' );
      this.router.navigate(['/login']);
      return false;
    }
  }

}
