import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Login } from './components/login/login';
import { Course } from './components/course/course';
import { Dashboard } from './components/dashboard/dashboard';
import { Profile } from './components/profile/profile';

const routes: Routes = [
  // 👉 Inicio en Login
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'course', component: Course },
  { path: 'profile', component: Profile },

  // 👉 Cualquier ruta inválida vuelve a login
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
