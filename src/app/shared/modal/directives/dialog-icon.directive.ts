import { Directive, Input, ElementRef, Renderer, AfterViewInit } from '@angular/core';
@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[dialog-icon]'
})

export class DialogIconDirective implements AfterViewInit {
    constructor(private element: ElementRef, private renderer: Renderer) {
    }
    // tslint:disable-next-line:no-input-rename
    @Input('dialog-icon') option: String;

    ngAfterViewInit() {
        setTimeout(() => {
            let cssClass: string = '';
            switch (this.option) {
                case 'info':
                    cssClass = 'dialog-icon-info';
                    break;
                case 'warning':
                    cssClass = 'dialog-icon-warning';
                    break;
                case 'error':
                    cssClass = 'dialog-icon-error';
                    break;
                case 'question':
                    cssClass = 'dialog-icon-question';
                    break;
                default:
                   break;
            }
            if (cssClass !== '') {
                this.renderer.setElementClass(this.element.nativeElement, cssClass, true);
            }
        }, 100);
    }
}
