import { Directive, Input, ElementRef, AfterViewInit } from '@angular/core';
@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[focus-blur]'
})

export class FocusBlurDirective implements AfterViewInit {
    constructor(private element: ElementRef) {
    }
    // Set focus as default.
    // tslint:disable-next-line:no-input-rename
    @Input('focus-blur') option: String;
    ngAfterViewInit() {
        let pThis: any = this;
        setTimeout(() => {
            if (pThis.option === 'focus' || pThis.option === 'focus_blur') {
                pThis.element.nativeElement.focus();
            }
            if (pThis.option === 'blur' || pThis.option === 'focus_blur') {
                pThis.element.nativeElement.blur();
            }
        }, 10);
    }
}
