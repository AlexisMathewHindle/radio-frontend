import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  dayWeatherLocalStorage: string;
  weatherIcon: string;
  currentTemperature: string;
  data: any;

  constructor(private weather: WeatherService,
              private http: HttpClient ) { }

  ngOnInit() {
    this.weatherReport();
  }

  weatherReport() {
    this.weather.getWeather()
      .subscribe(
        data => {
          this.date = data;
          const dayWeather = data.hourly.summary;
          localStorage.setItem('todayWeather', dayWeather);

          this.dayWeatherLocalStorage = localStorage.getItem('todayWeather');
          this.weatherIcon = data.hourly.icon;


          localStorage.setItem('todayIcon', this.weatherIcon);
          // this.currentTemperature = data.currently.apparentTemperature;
          this.currentTemperature = Math.ceil(((data.currently.apparentTemperature - 32) * 5 / 9) * 2) / 2;
          localStorage.setItem('todayTemp', this.currentTemperature);
        }
      );
      this.dayWeatherLocalStorage =   localStorage.getItem('todayWeather');
      this.currentTemperature = localStorage.getItem('todayTemp');
      this.weatherIcon = localStorage.getItem('todayIcon');


  }

}
