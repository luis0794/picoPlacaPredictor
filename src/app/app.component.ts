import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  panelTitle: string;
  date: string;
  time: string;
  btnTitle: string;
  isBtnDisabled: boolean;
  colorButton: string;
  progressBarSize: string;
  dialogVisible: boolean;
  canCirculate: boolean;

  constructor() {
    this.title = '"Pico y Placa" Predictor';
    this.panelTitle = 'Data in';
    this.btnTitle = 'Ask';
    this.isBtnDisabled = false;
    this.colorButton = 'ui-button-success';
    this.progressBarSize = '6px';
    this.dialogVisible = false;
    this.canCirculate = false;
  }

  ask(): void {
    this.dialogVisible = true;
  }

}
