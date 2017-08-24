import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LgcolorComponent} from './lgcolor/lgcolor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LgcolorComponent],
  exports: [LgcolorComponent]
})

export class LgcolorModule {
}
