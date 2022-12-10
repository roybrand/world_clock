import { Component, OnInit,Input, AfterViewInit } from '@angular/core';
import { Inject } from '@angular/core';
import { CityData } from './model/cityData';
@Component({
  selector: 'app-analog',
  template: `
    
    <div class="clock">
      <div class="analog-clock">
        <div class="hour hand" [ngStyle]="hourHandStyle"></div>
        <div class="minute hand" [ngStyle]="minuteHandStyle"></div>
        <div class="second hand" [ngStyle]="secondHandStyle"></div>
        <div class="center-circle"></div>
      </div>
      <div class="digital-clock">{{format(hour)}}:{{format(minute)}}:{{format(second)}}</div>
    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');

    .analog-clock {
      position: relative;
      margin: 150px auto 0;
      width: 200px;
      height: 200px;
      left: 1%;
      background-color: aliceblue;
      border-radius: 50%;
    }

    .hand {
      position: absolute;
      left: 50%;
      width: 1px;
      height: 100px;
      transform-origin: 100% 100%;
    }

    .hour {
      background-color: #f44336;
    }

    .minute {
      background-color: #3f51b5;
    }

    .second {
      background-color: #9e9e9e;
    }

    .center-circle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      width: 12px;
      height: 12px;
      background-color: black;
      border-radius: 50%;
    }

    .digital-clock {
      position: relative;
      top: 350px;
      left: 80%;
      transform: translate3d(-50%, 0, 0);
      font-size: 2em;
      font-family: 'Source Code Pro', monospace;
    }
  `]
})
export class AnalogComponent implements AfterViewInit {
  @Input() parentData: CityData;

  hourHandStyle : any;
  minuteHandStyle : any;
  secondHandStyle  :any;

  isRunning = true;
  timerId: any;

  date: Date;
  hour: number = 0;
  minute: number = 0;
  second: number = 0;

  

  ngAfterViewInit() {
    this.timerId = this.getTime();
  }

  animateAnalogClock() {
    this.hourHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(${(this.hour * 30) + (this.minute * 0.5) + (this.second * (0.5 / 60))}deg)` };

    this.minuteHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(${(this.minute * 6) + (this.second * 0.1)}deg)` };

    this.secondHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(${this.second * 6}deg)` };
  }

  getTime() {
    return setInterval(() => {
      this.date = new Date();
      this.date.setHours(this.date.getHours() + this.parentData.timeDiff);
      this.hour = this.date.getHours();
      this.minute = this.date.getMinutes();
      this.second = this.date.getSeconds();

      this.animateAnalogClock();
    }, 1000);
  }

  format(num: number) {
    return (num + '').length === 1 ? '0' + num : num + '';
  }

  toggle() {
    if (this.isRunning) {
      clearInterval(this.timerId);
    } else { this.getTime(); }

    this.isRunning = !this.isRunning;
  }
}
