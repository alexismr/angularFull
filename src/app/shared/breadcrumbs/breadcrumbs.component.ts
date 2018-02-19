import { Router, ActivationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {


  label: string = '';
  constructor(private router: Router ,
     public _title: Title ,
     public meta: Meta
    ) {


      this.getDataRouter().subscribe( data => {
      this.label = data.titulo;
      this._title.setTitle(this.label );

      let metaTag: MetaDefinition = {
        name: 'description',
        content: this.label
      };


      this.meta.updateTag(metaTag);

    });

   }

   getDataRouter() {
    return this.router.events
    .filter( evento => evento instanceof ActivationEnd )
    .filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null )
    .map((evento: ActivationEnd) => evento.snapshot.data);
   }





  ngOnInit() {
  }

}
