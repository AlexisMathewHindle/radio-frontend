import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angular-6-social-login';

import { FilterPipe } from './filter.pipe';

import { AppRouting } from './app.routing';
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { PlayerComponent } from './components/player/player.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { SearchComponent } from './components/search/search.component';
import { ShoutoutComponent } from './components/shoutout/shoutout.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ClockComponent } from './components/clock/clock.component';
import { NewsComponent } from './components/news/news.component';

import { AddService } from './services/add.service';
import { FunctionService } from './services/function.service';
import { ButtonsService } from './services/buttons.service';
import { WeatherService  } from './services/weather.service';
import { ShoutoutService  } from './services/shoutout.service';
import { MusicGraphService  } from './services/music-graph.service';

export function getAuthServiceConfigs() {

  const config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('424599903809-rdcq6mil37kl6uuaq5vqh8q44e5g88cb.apps.googleusercontent.com')
      },
    ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    LoginComponent,
    PlayerComponent,
    ButtonsComponent,
    SearchComponent,
    ShoutoutComponent,
    WeatherComponent,
    FilterPipe,
    ClockComponent,
    NewsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    SocialLoginModule,
    AppRouting

  ],
  providers: [
    FunctionService,
    ShoutoutService,
    WeatherService,
    ButtonsService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
