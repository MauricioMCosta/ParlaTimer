import { Component,Input } from '@angular/core';

/**
 * Generated class for the SemaphoreComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'semaphore',
  templateUrl: 'semaphore.html'
})
export class SemaphoreComponent {

  @Input('color') color='#ff0000';

  constructor() {
  }

}
