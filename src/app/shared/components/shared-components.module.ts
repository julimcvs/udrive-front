import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CommonModule
  ],
  providers: [],
  exports: [
    HeaderComponent
  ]
})
export class SharedComponentsModule {
}
