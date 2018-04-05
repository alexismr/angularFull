import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {


menu: any = [
  {
     titulo: 'Principal',
     icono: 'mdi mdi-gauge',
     submenu: [
       { titulo: 'Dashboard', url: '/dashboard' },
       { titulo: 'ProgressBar', url: '/progress' },
       { titulo: 'Skill', url: '/graficas1' },
       { titulo: 'Promesas', url: '/promesas' }
     ]
  },
  {
    titulo: 'Mantenimiento',
    icono: 'mdi mdi-folder-lock-open',
    submenu: [
      { titulo: 'usuarios', url: '/usuarios' },
      { titulo: 'hospitales', url: '/hospitales' },
      { titulo: 'medicos', url: '/medicos' }
    ]
 }
 ];
  constructor() { }

}
