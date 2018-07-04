import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FunctionService } from '../../services/function.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  weatherActive = false;
  shoutActive = false;
  newsActive = false;
  talkingClock: boolean;
  weather: boolean;
  news: boolean;

  constructor(private functions: FunctionService,
              private router: Router) { }

  ngOnInit() {
    // console.log(this.weatherActive);
  }

  saveFeatures() {
    this.activeClock();
    this.activeWeather();
    this.activeNews();

    this.router.navigate(['/player']);
  }

  activeNews() {
    let news;

    if (this.newsActive === this.functions.activeNews(news)) {
      console.log('this news is active');
      // console.log(document.querySelector('.news'));
        // document.querySelector('.news').style.display = 'flex';
    } else {
    }
  }

  activeWeather() {
    let weather;
    if (this.weatherActive === this.functions.activeWeather(weather)) {
      document.querySelector('.weather__container').style.display = 'flex';
    } else {
      document.querySelector('.weather__container').style.display = 'none';
    }
  }

  activeClock() {
    let talkingClock;
    if (this.clockActive === this.functions.activeClock(talkingClock)) {

      document.querySelector('.clock__container').style.display = 'block';
    } else {
        document.querySelector('.clock__container').style.display = 'none';
    }
  }

}
