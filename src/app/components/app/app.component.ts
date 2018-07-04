import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ routerTransition ]
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private router: Router) {}

  ngOnInit() {
      console.log(this.router.url);
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
