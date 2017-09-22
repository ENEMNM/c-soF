import { Component } from '@angular/core';

@Component({
  templateUrl: './app.mainview.html',
  styleUrls: ['./app.mainview.css']
})
export class MainView {
  date: Date;
  tooltip1: number = 1;
  tooltip2: number = 1;

  constructor() {
    this.date = new Date();
  }

  tooltipToggle(indexNum) {
    if(indexNum === 1) {
      this.tooltip1 != this.tooltip1;
    }
    if(indexNum === 2) {
      this.tooltip2 != this.tooltip2;
    }
  }
}
