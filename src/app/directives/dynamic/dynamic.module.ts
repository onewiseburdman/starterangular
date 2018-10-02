import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponentDirective } from '../dynamic-component.directive';
import { HomeDynamicDirective } from './../home-dynamic.directive';

// import { naviconsComponent } from '../../ui/navicons/navicons.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DynamicComponentDirective,
    HomeDynamicDirective
    // naviconsComponent
  ],
  exports: [
    DynamicComponentDirective,
    HomeDynamicDirective
    // naviconsComponent
  ]
})
export class dynamicModule { }
