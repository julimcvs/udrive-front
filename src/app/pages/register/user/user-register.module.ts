import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UserRegisterComponent} from "./user-register.component";
import {SharedComponentsModule} from "../../../shared/components/shared-components.module";
import {AppService} from "../../../shared/services/app.service";
import {UserRegisterRoutingModule} from "./user-register-routing.module";
import {MatSelectModule} from "@angular/material/select";
import {UniversityService} from "../../../shared/services/university.service";

@NgModule({
  declarations: [
    UserRegisterComponent
  ],
  imports: [
    SharedComponentsModule,
    UserRegisterRoutingModule,
    HttpClientModule,
    MatSelectModule
  ],
  providers: [
    AppService,
    MatSnackBar,
    UniversityService
  ],
})
export class UserRegisterModule {
}
