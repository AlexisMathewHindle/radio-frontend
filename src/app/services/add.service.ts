import { Injectable } from '@angular/core';

import { ARTIST } from '../components/player/artist-list';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  private addTrackTitle: any;
  artist = ARTIST;
  constructor() { }

  addTrack() {
    console.log('Track added!');
    console.log('ARTIST', ARTIST);
    this.addTrackTitle
    .subscribe(data => {
      this.artist = data;
      console.log(data);
    })
    this.addTrackTitle = {};
  }
}
