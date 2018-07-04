import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  public getWeather() {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const darksky = 'https://api.darksky.net/forecast/';
    const key = 'b09244399934d616069fc9f855b19389';
    const lat = '51.519798';
    const long = '-0.131649';


    return this.http.get(cors + darksky + key + '/' + lat + ',' + long);
  }
}
