import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactDynamicDirective } from './../contact-dynamic.directive';
import { DynamicComponentDirective } from '../dynamic-component.directive';
import { EventsDynamicDirective } from './../events-dynamic.directive';
import { HomeDynamicDirective } from './../home-dynamic.directive';
import { ItemDynamicDirective } from './../item-dynamic.directive';
import { ListDynamicDirective } from './../list-dynamic.directive';
import { LostDynamicDirective } from './../lost-dynamic.directive';
import { RegisterDynamicDirective } from './../register-dynamic.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContactDynamicDirective,
    DynamicComponentDirective,
    EventsDynamicDirective,
    HomeDynamicDirective,
    ItemDynamicDirective,
    ListDynamicDirective,
    LostDynamicDirective,
    RegisterDynamicDirective
    
  ],
  exports: [
    ContactDynamicDirective,
    DynamicComponentDirective,
    EventsDynamicDirective,
    HomeDynamicDirective,
    ItemDynamicDirective,
    ListDynamicDirective,
    LostDynamicDirective,
    RegisterDynamicDirective
  ]
})
export class dynamicModule { }
