import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
 @Input() leyenda: string = 'leyenda';
 @Input() progreso: number = 50;

 @Output() cambioValor: EventEmitter<number> = new EventEmitter();

 @ViewChild('txtProgress') txtprogress: ElementRef;


  constructor() {
   }

  ngOnInit() {
  }

  CambiarValor(valor: number) {


    if (this.progreso >= 100 ) {
      return;
    }
    if (this.progreso <= 0 ) {
      return;
    }
   this.progreso +=   valor;
   this.txtprogress.nativeElement.value = this.progreso;
   this.cambioValor.emit(this.progreso );

   this.txtprogress.nativeElement.focus();
  }
}
