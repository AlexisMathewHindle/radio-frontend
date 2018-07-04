import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButtonsService {

  playing = false;

  private playingSource = new BehaviorSubject('');
  currentPlaying = this.playingSource.asObservable();
  constructor() { }

  nowPlaying(playing: boolean) {
    this.playingSource.next(playing);
  }
}
