import { Usuario } from './../model/usuario.model';
import { UsuarioService } from './../services/service.index';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import * as  swal from 'sweetalert';

declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

forma: FormGroup;
servicealert: any;

  constructor(public _usuarioService: UsuarioService) {
    this.servicealert = swal;
  }

sonIguales( campo1: string , campo2: string) {

return ( group: FormGroup) => {
  // tslint:disable-next-line:prefer-const
  let pass1 = group.controls[campo1].value;
  // tslint:disable-next-line:prefer-const
  let pass2 = group.controls[campo2].value;

  if ( pass1 === pass2) {
       return null;
  }
  return{
    sonIguales: true
  };
};


}



  ngOnInit() {
    init_plugins();
    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, Validators.email),
      password:  new FormControl(null, Validators.required),
      password2:  new FormControl(null, Validators.required),
      condiciones: new FormControl(false)
    }, { validators: this.sonIguales('password', 'password2') } );


    this.forma.setValue({
      nombre: 'test',
      correo: 'test@hotmail.com',
      password : '123456',
      password2 : '1234567',
      condiciones : false
    });

  }

  registrarUsuario() {
    if ( this.forma.invalid) {
      return;
    }


    if ( !this.forma.value.condiciones) {
      this.servicealert('Importante', 'las condiciones son obligatorias' , 'warning');
   //   console.log( 'debe aceptar las  condiciones');
      return;
    }
      let usuario = new Usuario(
        this.forma.value.nombre,
        this.forma.value.correo,
        this.forma.value.password
      );


      this._usuarioService.crearUsuario(usuario)
      .subscribe(response => {
        console.log(response );
      });

    console.log(this.forma.valid);
    console.log(this.forma.value);
  }

}
