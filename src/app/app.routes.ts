import {Routes } from '@angular/router';

import { Login } from './components/login/login';
import { Course } from './components/course/course';
import { Dashboard } from './components/dashboard/dashboard';
import { Profile } from './components/profile/profile';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'course', component: Course },
  { path: 'profile', component: Profile },

  { path: '**', redirectTo: 'login' }
];