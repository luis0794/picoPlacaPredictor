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
  dialogVisible: boolean;
  canCirculate: boolean;
  carPlate: string;
  dayOfTheWeek: string;
  shouldValidTime: boolean;
  messageResult: string;

  constructor() {
    this.title = '"Pico y Placa" Predictor';
    this.panelTitle = 'Data in';
    this.btnTitle = 'Ask';
    this.isBtnDisabled = false;
    this.colorButton = 'ui-button-success';
    this.dialogVisible = false;
    this.canCirculate = false;
    this.shouldValidTime = true;
  }

  ask(): void {
    this.messageResult = this.carPlateIsValid() ?
      'The vehicle can circulate normally, enjoy trip :)' :
      'The vehicle is not allowed to circulate, on the day and time indicated';
    this.dialogVisible = true;
  }

  carPlateIsValid(): boolean {
    return this.haveCarPlate()
      && this.validateCarPlateByDay(this.getLastDigitOfCarPlate())
      && (this.shouldValidTime ? this.validateCarPlateByTime() : this.shouldValidTime);
  }

  validateCarPlateByTime(): boolean {
    const hours = parseInt(this.time.split(':')[0], 10);
    const minutes = parseInt(this.time.split(':')[1], 10);
    const isValidOnMorning = this.validateTimes(hours, minutes, 7, 0, 9, 60);
    const isValidOnAfternoon = this.validateTimes(hours, minutes, 16, 0, 19, 30);

    return isValidOnMorning && isValidOnAfternoon;
  }

  validateTimes(hours: number, minutes: number, minHour: number, minMinute: number, maxHour: number, maxMinute): boolean {
    return !((hours >= minHour && minutes >= minMinute) && (hours <= maxHour && minutes <= maxMinute ));
  }

  validateCarPlateByDay(lastDigit: number): boolean {
    this.setDayOfTheWeek();
    switch (this.dayOfTheWeek) {
      case 'Mon':
        return lastDigit > -1 && lastDigit < 2;
      case 'Tue':
        return lastDigit > 1 && lastDigit < 4;
      case 'Wed':
        return lastDigit > 3 && lastDigit < 6;
      case 'Thu':
        return lastDigit > 5 && lastDigit < 8;
      case 'Fri':
        return lastDigit > 7 && lastDigit < 10;
      case 'Sat':
        this.shouldValidTime = false;
        return true;
      case 'Sun':
        this.shouldValidTime = false;
        return true;
    }
  }

  setDayOfTheWeek(): void {
    const hour = parseInt(this.time.split(':')[0], 10) - 5;
    const minute = this.time.split(':')[1];
    this.dayOfTheWeek = new Date(`${ this.date } ${ hour }:${ minute }:00`).toUTCString().split(',')[0];
  }

  getLastDigitOfCarPlate(): number {
    return parseInt(this.carPlate.split('')[this.carPlate.length - 1], 10);
  }

  haveCarPlate(): boolean {
    return this.carPlate !== undefined && this.carPlate.length === 8;
  }

}
