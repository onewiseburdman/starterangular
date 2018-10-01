import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponentDirective } from '../dynamic-component.directive';

// import { naviconsComponent } from '../../ui/navicons/navicons.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DynamicComponentDirective,
    // naviconsComponent
  ],
  exports: [
    DynamicComponentDirective
    // naviconsComponent
  ]
})
export class dynamicModule { }
