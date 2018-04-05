// SW: added new base component.
import { Component, ViewChild, ElementRef, Renderer, AfterViewInit } from '@angular/core';
import { DialogConfig } from '../../dialog-config';
import { FocusBlurDirective } from '../../directives/focus-blur.directive';
import { DialogService } from '../../services/dialog.service';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'basic-dialog',
    templateUrl: './basic-dialog.component.html',
    styleUrls: ['./basic-dialog.component.css']
  })
export class BasicDialogComponent extends DialogComponent implements AfterViewInit {
    constructor(dialogService: DialogService, private renderer: Renderer) {
        super(dialogService);
    }

    // Adding CSS classes to elements.
    @ViewChild('dialogElem') dialogElem: ElementRef;
    @ViewChild('headerElem') headerElem: ElementRef;
    @ViewChild('titleElem') titleElem: ElementRef;
    @ViewChild('bodyElem') bodyElem: ElementRef;
    @ViewChild('messageElem') messageElem: ElementRef;
    @ViewChild('footerElem') footerElem: ElementRef;
    @ViewChild('actionButtonElem') actionButtonElem: ElementRef;
    @ViewChild('closeButtonElem') closeButtonElem: ElementRef;
   
   
    ngAfterViewInit() {
        if ( this.dialogAddClass !== undefined && this.dialogAddClass !== '' ) {
            this.renderer.setElementClass(this.dialogElem.nativeElement, this.dialogAddClass, true);
        }
        if (this.headerAddClass !== undefined && this.headerAddClass !== '') {

            this.renderer.setElementClass(this.headerElem.nativeElement, this.headerAddClass, true);
        }
        if (this.titleAddClass !== undefined && this.titleAddClass !== '') {

            this.renderer.setElementClass(this.titleElem.nativeElement, this.titleAddClass, true);
        }
        if (this.bodyAddClass !== undefined && this.bodyAddClass !== '') {

            this.renderer.setElementClass(this.bodyElem.nativeElement, this.bodyAddClass, true);
        }
        if (this.messageAddClass !== undefined && this.messageAddClass !== '') {

            this.renderer.setElementClass(this.messageElem.nativeElement, this.messageAddClass, true);
        }
        if (this.footerAddClass !== undefined && this.footerAddClass !== '') {

            this.renderer.setElementClass(this.footerElem.nativeElement, this.footerAddClass, true);
        }
        if (this.actionButtonAddClass !== undefined && this.actionButtonAddClass !== '') {

            this.renderer.setElementClass(this.actionButtonElem.nativeElement, this.actionButtonAddClass, true);
        }
        if (this.closeButtonAddClass !== undefined && this.closeButtonAddClass !== '') {

            this.renderer.setElementClass(this.closeButtonElem.nativeElement, this.closeButtonAddClass, true);
        }
    }
    action() {
        this.result = true;
        this.dialogResult();
    }

    close() {
        this.result = false;
        this.dialogResult();
    }

    // @ViewChild("actionButton")
    // set actionButton(_input: ElementRef | undefined) {
    //    if (_input !== undefined) {
    //        let pThis: any = this;
    //        setTimeout(() => {
    //            pThis._input.nativeElement.focus();
    //        }, 0);
    //     }
    // }

}
