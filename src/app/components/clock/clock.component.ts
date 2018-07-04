import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})

export class ClockComponent implements OnInit {

  constructor() {}

  time: string;
  seconds: string;
  minutes: string;
  hours: string;
  totalTime: string;
  activeClock: boolean = false;

  ngOnInit() {
      setInterval(() => {
        this.ticktock();
      }, 1000);
  }

  ticktock() {
    setTimeout(() => {
      this.time = new Date();
      this.seconds = this.time.getSeconds();
      this.minutes = this.time.getMinutes();
      this.hours = this.time.getHours();

      if (this.seconds.toString().length === 1) {
        this.seconds = '0' + this.seconds;
      }

      if (this.minutes.toString().length === 1) {
        this.minutes = '0' + this.minutes;
      }
      this.totalTime = this.hours + ' : ' + this.minutes + ' : ' + this.seconds;
    }, 100);
  }
}
