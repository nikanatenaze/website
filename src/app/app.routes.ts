import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home')
        .then(x => x.Home)
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home')
        .then(x => x.Home)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/error/error')
        .then(x => x.Error)
  }
];
