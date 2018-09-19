import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[d-menu]',
})
export class DynamicComponentDirective {
  
  constructor(public viewContainerRef: ViewContainerRef) { }
}