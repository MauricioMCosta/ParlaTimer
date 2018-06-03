import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TimerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timer',
  templateUrl: 'timer.html',
})
export class TimerPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimerPage');
  }

  timerTimeouts:number[]=undefined;

  color="white";

  loadProgress=52;
  selectedPreset: any=null;
  presets= [
    {text:"Ice Breaker",value:{min:120,warn:150,max:180}},
    {text:"Organize your speech", value:{min:180, warn:240, max:300}}]

  isStartButtonDisabled(){
    return this.selectedPreset==null;
  }

  onPresetSelected(value) {
    this.timerTimeouts=[value.value.min, value.value.warn, value.value.max];
  }
  onTimerTimeOut(t:number) {
    if(t<this.selectedPreset.value.min) {
      this.color="lightgray";
    } else if(t<this.selectedPreset.value.warn){
      this.color="green";
    } else if(t<this.selectedPreset.value.max){
      this.color="orange";
    } else {
      this.color="red";
    }
  }
  onTimerReset(){
    this.color='white';
  }
}
