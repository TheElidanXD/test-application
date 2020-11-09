import { NgModule } from '@angular/core';

import { NumberInputDirective } from './directives/number-input.directive';

@NgModule({
  declarations: [
    NumberInputDirective
  ],
  exports: [
    NumberInputDirective
  ]
})
export class SharedModule { }
