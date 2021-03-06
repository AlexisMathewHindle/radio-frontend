import { Component, OnInit } from '@angular/core';

import { AddService } from '../../services/add.service';
import { MusicGraphService } from '../../services/music-graph.service';

import { showList } from './showlist';
import { ARTIST } from './artist-list';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  data: any;
  showlist = showList;
  artist = ARTIST;

  constructor(private addTrack: AddService,
              private musicCall: MusicGraphService) {}


  ngOnInit() {
    this.getArtist();
    // this.artist.artistTitle.push(this.addTrack.addTrackTitle);

    console.log(this.artist);
  }

  deleteTrack(track: string) {
    this.artist.pop();
  }

  getArtist() {
    console.log('Got artist')
  }

}
