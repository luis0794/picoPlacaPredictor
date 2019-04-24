import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  leftPanelTitle: string;
  rightPanelTitle: string;
  date: string;
  time: string;
  btnTitle: string;
  isBtnDisabled: boolean;

  constructor() {
    this.title = '"Pico y Placa" Predictor';
    this.leftPanelTitle = 'Data in';
    this.rightPanelTitle = 'Result';
    this.btnTitle = 'Ask';
    this.isBtnDisabled = true;
  }

}
