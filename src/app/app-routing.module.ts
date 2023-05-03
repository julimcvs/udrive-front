import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppMainComponent} from './app-main.component';
import {AppComponent} from './app.component';
import {NotAuthenticatedUserGuard} from "./shared/services/guards/not-authenticated-user.guard";
import {AuthenticatedUserGuard} from "./shared/services/guards/authenticated-user.guard";

const routes: Routes = [
  {path: '', canActivate: [AuthenticatedUserGuard], component: AppMainComponent},
  // TODO create "UserComponent"
  {
    path: 'user', component: AppComponent,
    children: []
  },
  // TODO create "DriverComponent"
  {
    path: 'driver', component: AppComponent,
    children: []
  },
  {
    path: 'login', canActivate: [NotAuthenticatedUserGuard], loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register', canActivate: [NotAuthenticatedUserGuard], loadChildren: () => import('./pages/register/user/user-register.module').then(m => m.UserRegisterModule)
  },
  {path: '**', redirectTo: '/notfound'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
