import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Constants} from "../../../shared/utils/constants";
import {UserRegisterComponent} from "./user-register.component";

const routes: Routes = [
  {path: Constants.ROUTES.ROOT, component: UserRegisterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRegisterRoutingModule {
}
