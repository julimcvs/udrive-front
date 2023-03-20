import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Constants} from '../../../shared/utils/constants';
import {TestComponent} from './test.component';

const routes: Routes = [
  {path: Constants.ROUTES.ROOT, component: TestComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule {
}
