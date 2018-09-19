// tslint:disable-next-line:max-line-length
import { Directive, Input, OnInit, ViewContainerRef, AfterViewInit, OnDestroy, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { headertopComponent } from '../ui/headertop/headertop.component';

import { Observable } from 'rxjs';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[dynamic]'
})
export class DynamicComponentDirective implements OnInit, OnDestroy, AfterViewInit {
  @Input() dynamic: Observable<any>;

  public obj = {
    title: 'Hello',
    message: 'World'
  };

  private elRef: any;
  private component;

  constructor(
    public viewContainerRef: ViewContainerRef,
    private cdRef: ChangeDetectorRef,
    private factory: ComponentFactoryResolver
  ) {
    this.elRef = viewContainerRef;
    this.component = headertopComponent;
  }

  ngOnInit() {
    //
  }

  ngOnDestroy() {

  }

  ngAfterViewInit() {
    this.cdRef.detectChanges();
    this.loadComponent();
  }

  loadComponent() {
    const componentFactory = this.factory.resolveComponentFactory(this.component);

    this.elRef.clear();

    const componentRef = this.elRef.createComponent(componentFactory);

    this.dynamic.subscribe((data) => {
      if (data) {
        (<any>componentRef.instance).data = data[0];
      }
    });
  }
}
