// tslint:disable-next-line:max-line-length
import { Directive, Input, OnInit, ViewContainerRef, AfterViewInit, OnDestroy, ComponentFactoryResolver } from '@angular/core';
import { headertopComponent } from '../ui/headertop/headertop.component';

import { Subscription, Observable } from 'rxjs';
import { RegisterComponent } from '../pages/register/register.component';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[dynamic]'
})
export class DynamicComponentDirective implements OnInit, OnDestroy, AfterViewInit {
  @Input() dynamic: Observable<any>;
  data: Subscription;

  private elRef: any;
  private component;

  readonly templateMapper = {
    headertop: headertopComponent,
    register: RegisterComponent
  };

  constructor(
    public viewContainerRef: ViewContainerRef,
    private factory: ComponentFactoryResolver
  ) {
    this.elRef = viewContainerRef;
    this.component = headertopComponent;
  }

  ngOnInit() {
    this.dynamic.subscribe((data) => {
      if (data) {
        this.loadComponent(data[0]);
      }
    });
  }

  ngOnDestroy() {
    this.data.unsubscribe();
  }

  ngAfterViewInit() {

  }

  loadComponent(data: any) {
    const components = data.templates[0].components;
    const orgdata = data;

    for (let i = 0; i < components.length; i++) {
      const componentFactory = this.factory.resolveComponentFactory(this.getComponentByAlias(components[i].name));
      this.elRef.clear();

      const componentRef = this.elRef.createComponent(componentFactory);

      (<any>componentRef.instance).data = orgdata;
    }

    // const componentFactory = this.factory.resolveComponentFactory(this.component);

    // this.elRef.clear();
    // const componentRef = this.elRef.createComponent(componentFactory);

    // (<any>componentRef.instance).data = data;
  }

  private getComponentByAlias(alias: string) {
    return this.templateMapper[alias];
  }

}
