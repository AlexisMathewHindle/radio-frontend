import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {

  constructor() { }

  talkingClock: boolean;
  weather: boolean;
  news: boolean;

  public activeClock() {
    this.talkingClock = true;

    return this.talkingClock;
  }

  public activeWeather() {
    this.weather = true;

    return this.weather;
  }

  public activeNews() {
    this.news = true;

    return this.news;
  }
}
