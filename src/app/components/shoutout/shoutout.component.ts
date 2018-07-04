import { Component, OnInit } from '@angular/core';

import { ShoutoutService } from '../../services/shoutout.service';

@Component({
  selector: 'app-shoutout',
  templateUrl: './shoutout.component.html',
  styleUrls: ['./shoutout.component.scss']
})
export class ShoutoutComponent implements OnInit {

  selectedTime: string = new Date().toUTCString();
  shoutMessage: string;
  shoutTo: string;
  shoutOutDate = false;
  text: string;

  constructor(private shoutoutService: ShoutoutService) { }

  ngOnInit() {}

  shoutOutLaterShow() {
    this.shoutOutDate = true;
  }

  shoutOutLater() {
    const selected = this.selectedTime;
    const dateTime = selected.getFullYear()
                      + '/' + (selected.getMonth() + 1)
                      + '/' + selected.getDate() + ' '
                      + selected.getHours() + ':'
                      + selected.getMinutes()
                      + ':' + selected.getSeconds();

    const shoutPost = {
        text: this.shoutMessage,
        scheduled: dateTime
      };

      this.shoutoutService.postShout(shoutPost)
        .subscribe(
          (response) => console.log(response)
        );

  }

  shoutOutNow() {
    const shoutPost = {
        text: this.shoutMessage,
        scheduled: this.selectedTime
      };

    this.shoutoutService.postShout(shoutPost)
      .subscribe(
        (response) => console.log(response)
      );
    }

}
