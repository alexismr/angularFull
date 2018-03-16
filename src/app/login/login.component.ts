import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../model/usuario.model';
import { MrDialogService } from '../shared/modal/services/mr-dialog.service';

declare function init_plugins();
declare const gapi: any;




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recuerdame: boolean = false;
  email: string;

  auth2: any;

  constructor(public route: Router,
    public _usuarioService: UsuarioService , public _modalService: MrDialogService
  ) { }

  ngOnInit() {
    init_plugins();
    this.email = localStorage.getItem('email') || '';

    if (this.email.length > 1) {
        this.recuerdame = true ;
    }
    this.googleInit();
  }


  googleInit() {
    gapi.load('auth2', () => {

      this.auth2 = gapi.auth2.init({
        client_id: '920679266775-aacnnh28t0dbn4ifb2ffc7pkf9sfp8s7.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });

      this.attachSignin( document.getElementById('btnGoogle') );

    });




  }

  attachSignin( element) {
    this.auth2.attachClickHandler( element, {}, (googleUser) => {

      let profile = googleUser.getBasicProfile();

         console.log(JSON.stringify(profile));

      let token = googleUser.getAuthResponse().id_token;

      this._usuarioService.loginGoogle( token )
              .subscribe( () => window.location.href = '#/dashboard'  );
    });


  }

  ingresar(forma: NgForm) {
    if (forma.invalid) {
      return;
    }


    let usuario = new  Usuario(null, forma.value.email , forma.value.password );
    this._usuarioService.login(usuario , forma.value.recuerdame)
    .subscribe(ok => this.route.navigate(['/dashboard']));

  }


  openModal() {

    let text: string = ' Plain text, unformatted text \
    Text file, a type of computer file opened by most text software\
Text string, a sequence of characters manipulated by software\
Text (Chrome app), a text editor for the Google Chrome web browser';
   this._modalService.openMessage(text, 'Error', 'error');
  }


}
