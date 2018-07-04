import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MusicGraphService {

  constructor(private http: HttpClient) { }

  public getMusic() {
    // const cors = 'https://cors-anywhere.herokuapp.com/';
    //
    // const url = 'http://www.last.fm/api/auth/?api_key=4d426996a1df348d01006f30678b0f6b';
    //
    // return this.http.get(cors + url);
  }
}
