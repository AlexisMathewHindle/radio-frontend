import { RouterModule, Routes } from '@angular/router';

import { PlayerComponent } from './components/player/player.component';
import { ShoutoutComponent } from './components/shoutout/shoutout.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';

const routes = [
  {
    path: '',
    redirectTo: '/player',
    pathMatch: 'full'
  },
  {
    path: 'player',
    component: PlayerComponent
  },
  {
    path: 'shoutout',
    component: ShoutoutComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

export const AppRouting = RouterModule.forRoot(routes, {
  useHash: true
});
