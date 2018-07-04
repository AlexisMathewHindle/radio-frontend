import { Component, OnInit } from '@angular/core';
import { ButtonsService } from '../../services/buttons.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  constructor(private buttonFunction: ButtonsService) { }

  ngOnInit() {
  }

  playing() {
    console.log('Now playing');
    this.buttonFunction.nowPlaying();
    const playingCurrent = document.querySelector('.header__now-playing');

    if (playingCurrent.classList.contains('active')) {
      playingCurrent.classList.remove('active');
    } else {
      playingCurrent.classList.add('active');
    }
  }

}
