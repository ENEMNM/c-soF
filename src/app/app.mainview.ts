import { Component } from '@angular/core';

@Component({
  templateUrl: './app.mainview.html',
  styleUrls: ['./app.mainview.css']
})
export class MainView {
  date: Date;
  tooltip1: number = 0;
  tooltip2: number = 0;
  item: number[] = [0,];

  constructor() {
    this.date = new Date();
  }

  public tooltipToggle(indexNum) {
    if(indexNum === 1) {
      this.tooltip1 = this.tooltip1 ? 0 : 1;
    }
    if(indexNum === 2) {
      this.tooltip2 = this.tooltip2 ? 0 : 1;
    }
  }
}
