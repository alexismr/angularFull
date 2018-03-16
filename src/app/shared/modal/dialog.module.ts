import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// impoert  components modal dialog

import { DialogHostComponent } from './components/dialoghost/dialog-host.component';
import { DialogMainComponent } from './components/dialogmain/dialog-main.component';
import { DialogService } from './services/dialog.service';
import { MrDialogService } from './services/mr-dialog.service';
import { DraggableDirective } from './directives/draggable.directive';
import { VerticalCenterDirective } from './directives/vertical-center.directive';
import { FocusBlurDirective } from './directives/focus-blur.directive';
import { DialogIconDirective } from './directives/dialog-icon.directive';
import { BasicDialogComponent } from './components/basic/basic-dialog.component';
import { DialogCache } from './dialog-cache';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
    declarations: [
        DialogHostComponent,
        DialogMainComponent,
        DraggableDirective,
        VerticalCenterDirective,
        FocusBlurDirective,
        DialogIconDirective,
        BasicDialogComponent
    ],
    providers: [
        DialogService,
        MrDialogService
    ],
    imports: [
        CommonModule
    ],
    exports: [
        BasicDialogComponent,
        FocusBlurDirective
    ],
    entryComponents: [
        DialogHostComponent,
        DialogMainComponent,
        // SW: also need to declare these items as entryComponent.
        BasicDialogComponent
    ]
})
export class DialogModule {
}
