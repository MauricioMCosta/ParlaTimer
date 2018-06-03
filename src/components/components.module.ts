import { IonicModule } from 'ionic-angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { KProgressBarComponent } from './k-progress-bar/k-progress-bar';
import { SemaphoreComponent } from './semaphore/semaphore';
import { KTimerControlComponent } from './k-timer-control/k-timer-control';
@NgModule({
    declarations:
        [
            KProgressBarComponent,
            SemaphoreComponent,
            KTimerControlComponent
        ],
    imports: [IonicModule],
    exports:
        [
            KProgressBarComponent,
            SemaphoreComponent,
            KTimerControlComponent
        ],
    schemas:
        [
            CUSTOM_ELEMENTS_SCHEMA
        ]
})
export class ComponentsModule { }
