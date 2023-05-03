import {NgModule} from "@angular/core";
import {SharedComponentsModule} from "../../shared/components/shared-components.module";
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./login.component";
import {LoginRoutingModule} from "./login-routing.module";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AppService} from "../../shared/services/app.service";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedComponentsModule,
    LoginRoutingModule,
    HttpClientModule,
  ],
  providers: [
    AppService,
    MatSnackBar
  ],
})
export class LoginModule {
}
