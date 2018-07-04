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
    component: PlayerComponent,
    data: { state: 'player'}
  },
  {
    path: 'shoutout',
    component: ShoutoutComponent,
    data: { state: 'shoutout'}
  },
  {
    path: 'search',
    component: SearchComponent
    data: { state: 'search'}
  },
  {
    path: 'admin',
    component: AdminComponent,
    data: { state: 'admin'}
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { state: 'login'}
  }
];

export const AppRouting = RouterModule.forRoot(routes, {
  useHash: true
});
