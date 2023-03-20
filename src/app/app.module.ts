import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedComponentsModule} from './shared/components/shared-components.module';
import {AppMainComponent} from './app-main.component';
import {HttpClientModule} from '@angular/common/http';
import {TestService} from './pages/user/test/test.service';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedComponentsModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
