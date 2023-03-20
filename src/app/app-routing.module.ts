import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppMainComponent} from './app-main.component';
import {AppComponent} from './app.component';
import {TestComponent} from './pages/user/test/test.component';

const routes: Routes = [
  {path: '', component: AppMainComponent},
  // TODO create "UserComponent"
  {
    path: 'user', component: AppComponent,
    children: [
      {path: 'test', loadChildren: () => import('./pages/user/test/test.module').then(m => m.TestModule)},
    ]
  },
  // TODO create "DriverComponent"
  {
    path: 'driver', component: AppComponent,
    children: []
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
