import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  inputUser: string;
  inputPassword: string;
  user: string;
  password: string;
  errorMessage: string;

  fakeUserName = 'admin@imagination.com';
  fakePassword = '12345';

  constructor(private router: Router) { }

  ngOnInit() {}

  login() {

    if (this.fakeUserName === this.inputUser && this.fakePassword === this.inputPassword) {
      console.log('You are logged in');
      this.router.navigate(['/admin']);

    } else {
      this.errorMessage = 'You have entered the wrong credentials';
      console.log(this.errorMessage);
    }
  }

}
