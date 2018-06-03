
import { Component, Input, Output, EventEmitter } from '@angular/core';


/**
 * Generated class for the KTimerControlComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'k-timer-control',
  templateUrl: 'k-timer-control.html'
})
export class KTimerControlComponent {
  @Input('timeouts') 
  timeouts:number[]=[15];

  @Input('counter')
  counter:number=0;
  
  @Input('disabled')
  disabled:boolean=false;
  
  @Output() onTimeout=new EventEmitter();
  @Output() onReset=new EventEmitter();

  private mCounter:number=0;
  private mWorker:any=undefined;

  
  text: string;
  isRunning=false;

  constructor() {
    if(this.mWorker==undefined) this.mCounter=this.counter;
    this.setText(this.mCounter);

  }

  
  start() {
    if(this.mWorker!=undefined) clearInterval(this.mWorker);
    this.isRunning=true;
    this.onReset.emit(this.mCounter);
    this.mWorker=setInterval(()=>{
      this.mCounter++;
      this.setText(this.mCounter);
      
      // handle timeout flag
      if(this.timeouts!=null) {
        if(this.timeouts.indexOf(this.mCounter)>=0) {
          this.onTimeout.emit(this.mCounter);
        }
      }
    },1000);
  }

  stop() {
    if(this.mWorker!=undefined) clearInterval(this.mWorker);
    this.isRunning=false;
  }

  reset(){
    this.mCounter=this.counter;
    this.setText(this.mCounter);
    this.onReset.emit();
  }

  private setText(value:number){
    let fmin=Math.floor(value/60);
    let fhrs=Math.floor(fmin/60);

    let sec=Math.floor(value%60);
    let min=Math.floor(fmin%60);

    let stringSec=('0'+sec).slice(-2);
    let stringMin=('0'+min).slice(-2);
    
    this.text=`${fhrs}:${stringMin}:${stringSec}`;
  }
}
