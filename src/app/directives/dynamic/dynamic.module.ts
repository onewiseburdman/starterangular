import { cssimporterComponent } from './../../ui/cssimporter/cssimporter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponentDirective } from '../dynamic-menu.directive';
import { headertitleComponent } from '../../ui/headertitle/headertitle.component';
// import { naviconsComponent } from '../../ui/navicons/navicons.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DynamicComponentDirective,
    headertitleComponent,
    // naviconsComponent
  ],
  exports: [
    DynamicComponentDirective,
    headertitleComponent
    // naviconsComponent
  ]
})
export class DynamicModule { }
