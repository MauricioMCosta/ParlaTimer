import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { SemaphoreComponent } from './semaphore/semaphore';
@NgModule({
	declarations: [ProgressBarComponent,
    SemaphoreComponent],
	imports: [],
	exports: [ProgressBarComponent,
    SemaphoreComponent]
})
export class ComponentsModule {}
