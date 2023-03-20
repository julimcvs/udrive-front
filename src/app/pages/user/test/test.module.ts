import {NgModule} from '@angular/core';
import {TestComponent} from './test.component';
import {SharedComponentsModule} from '../../../shared/components/shared-components.module';
import {TestService} from './test.service';
import {TestRoutingModule} from './test-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    SharedComponentsModule,
    TestRoutingModule,
    HttpClientModule
  ],
  providers: [
    TestService,
  ],
})
export class TestModule {
}
