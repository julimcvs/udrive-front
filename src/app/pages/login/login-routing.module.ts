import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Constants} from "../../shared/utils/constants";
import {LoginComponent} from "./login.component";

const routes: Routes = [
  {path: Constants.ROUTES.ROOT, component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
