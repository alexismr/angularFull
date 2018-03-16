import { Injectable, Injector, Type } from '@angular/core';
import { DialogService } from './dialog.service';
import { Observable } from 'rxjs';
import { DialogComponent } from '../components/dialog/dialog.component';
import { BasicDialogComponent } from '../components/basic/basic-dialog.component';

@Injectable()
export class MrDialogService {

    constructor(injector: Injector, private dialogService: DialogService) { }

    openMessage(param: any, title?: string, icon?: string) {
        // tslint:disable-next-line:prefer-const
        let params: any = this.getParams(param, title, icon);
        params.basicType = 'message';
        this.dialogService.addDialog(BasicDialogComponent, params);
    }

    openConfirm(param: any, title?: string, icon?: string): Observable<any> {
        // tslint:disable-next-line:prefer-const
        let params: any = this.getParams(param, title, icon);
        params.basicType = 'confirm';
        return this.dialogService.addDialog(BasicDialogComponent, params);
    }

    private getParams(param: any, title?: string, icon?: string): any {
        let params: any = {};
        if (param && typeof param === 'string') {
            // Sigle line inputs.
            params.message = param;
            if (title !== undefined && title !== '') {

                params.title = title;
            }
            if (icon !== undefined && icon !== '')  {

                params.icon = icon;
            }
        }
        // tslint:disable-next-line:one-line
        else if (param && typeof param === 'object') {
            params = param;
        }
        return params;
    }

    // Open custom or data dialog by passing custom dialog component and parameters.
    openPrime(component: Type<DialogComponent>, params?: any): Observable<any> {
        return this.dialogService.addDialog(component, params);
    }

    // Allow external call to get dialog components.
    getDialogArray(): DialogComponent[] {
        return this.dialogService.dialogs;
    }

    // Allow external call to close dialogs.
    clearAllDialogs(dialogComponent: DialogComponent) {
        this.dialogService.removeDialog(dialogComponent, true );
    }
}
