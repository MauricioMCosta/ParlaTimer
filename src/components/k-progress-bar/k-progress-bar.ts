import { Component, Input } from '@angular/core';

/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'k-progress-bar',
  templateUrl: 'k-progress-bar.html'
})
export class KProgressBarComponent {
  @Input('progress') progress=23;

  constructor() {

  }

}
