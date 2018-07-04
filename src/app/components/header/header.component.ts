import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Users } from './possible-logins';

import {
    AuthService,
    GoogleLoginProvider
} from 'angular-6-social-login';

import { ButtonsService } from '../../services/buttons.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showAdmin = true;
  public users = Users;
  userName: string;
  userEmail: string;

  isPlaying = '';
  constructor(private router: Router,
              private buttonFunction: ButtonsService,
              private socialAuthService: AuthService) {}

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    // TODO: Can look at using LinkedIn and/or Facebook
    if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        localStorage.setItem('userName', userData.name);
        localStorage.setItem('email', userData.email);
      }
    );
  }

  ngOnInit() {
    this.userName = '';
    this.userEmail = '';
    this.showAdmin = false;

    const userName = this.userName;
    const userEmail = this.userEmail;
    const admin = this.showAdmin;

    this.users.map(function(item) {
      const userName =  item.userName;
      if (userName === localStorage.getItem('userName')) {
        const admin = true;
        console.log('Username is the same');
        console.log(admin, 'admin');
      } else if (localStorage.getItem('userName') == null) {
        console.log('Impossible login');
      } else {
        console.log('Not logged in');
      }
    });
  }

  pausePlaying() {
    const pauseButton = document.querySelector('.header__now-playing');
    pauseButton.setAttribute('style', 'display:none !important');

  }

}
