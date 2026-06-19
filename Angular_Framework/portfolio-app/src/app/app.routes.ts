import { Routes } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Login } from './login/login';
import { Article } from './article/article';
import { Grid } from './grid/grid';
import { Profile } from './profile/profile';

export const routes: Routes = [
  { path: '', component: Welcome },
  { path: 'login', component: Login },
  { path: 'article', component: Article },
  { path: 'grid', component: Grid },
  { path: 'profile', component: Profile },
  { path: '**', redirectTo: '' }
];
