import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/jsn' })
};

@Injectable({
  providedIn: 'root'
})

export class ShoutoutService {

  constructor( private http: HttpClient ) { }



  postShout(shoutPost: any[]) {

    return this.http.post('https://techstudio.xp.imagination.net/api/radio/shoutout/', shoutPost);

  }

}
