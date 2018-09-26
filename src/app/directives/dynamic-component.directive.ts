import { dynamicbackgroundComponent } from './../ui/dynamicbackground/dynamicbackground.component';
import { dynamicbackgroundsolidComponent } from './../ui/dynamicbackgroundsolid/dynamicbackgroundsolid.component';
import { headertitleComponent } from '../ui/headertitle/headertitle.component';
import { cssimporterComponent } from '../ui/cssimporter/cssimporter.component';
// tslint:disable-next-line:max-line-length
import { Directive, Input, OnInit, ViewContainerRef, AfterViewInit, OnDestroy, ComponentFactoryResolver } from '@angular/core';
import { templateComponent } from '../ui/template/template.component';

import { Subscription, Observable, from } from 'rxjs';
import { filter } from 'rxjs/operators';

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
    template: templateComponent,
    cssimporter: cssimporterComponent,
    dynamicbackground: dynamicbackgroundComponent,
    dynamicbackgroundsolid: dynamicbackgroundsolidComponent,
    headertitle: headertitleComponent
  };

  constructor(
    public viewContainerRef: ViewContainerRef,
    private factory: ComponentFactoryResolver
  ) {
    this.elRef = viewContainerRef;
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.data.unsubscribe();
  }

  ngAfterViewInit() {
    this.dynamic.subscribe((data) => {
      if (data) {
        console.log(data);
        this.loadComponent(data);
      }
    });
  }

  loadComponent(data: any) {
    const components: Array<any> = data[0][0].templates[0].components;
    const orgdata = data[0][0];
    const navdata = data[1];
    const filtered = from(components).pipe(
      filter(component => component.published === true)
    );

    filtered.subscribe((component) => {
      const componentFactory = this.factory.resolveComponentFactory(this.getComponentByAlias(component.name));
      const componentRef = this.elRef.createComponent(componentFactory);
      (<any>componentRef.instance).data = orgdata;
      if (navdata) {
        (<any>componentRef.instance).navdata = navdata;
      }
    });

    // this.elRef.clear();
  }

  private getComponentByAlias(alias: string) {
    return this.templateMapper[alias];
  }

}
