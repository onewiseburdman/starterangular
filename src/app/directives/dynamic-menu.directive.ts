import { headertitleComponent } from './../ui/headertitle/headertitle.component';
import { dynamicbackgroundComponent } from './../ui/dynamicbackground/dynamicbackground.component';
import { cssimporterComponent } from './../ui/cssimporter/cssimporter.component';
// tslint:disable-next-line:max-line-length
import { Directive, Input, OnInit, ViewContainerRef, AfterViewInit, OnDestroy, ComponentFactoryResolver } from '@angular/core';
import { templateComponent } from '../ui/template/template.component';
import { Subscription, Observable } from 'rxjs';
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
    dynamicbackground: dynamicbackgroundComponent ,
    headertitle: headertitleComponent
  };

  constructor(
    public viewContainerRef: ViewContainerRef,
    private factory: ComponentFactoryResolver
  ) {
    this.elRef = viewContainerRef;
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
    const filtered = components.filter(function (components){
      data.templates[0].components[0].published === true;
    }
      
    )
    const orgdata = data;
    
    for (let i = 0; i < filtered.length; i++) {
      const componentFactory = this.factory.resolveComponentFactory(this.getComponentByAlias(components[i].name));
      // if left doesn't allow the other components to generate this.elRef.clear();
      /////we need to add a true or false statement here for published or not.
      const componentRef = this.elRef.createComponent(componentFactory);

      (<any>componentRef.instance).data = orgdata;
    }
//do not use
    // const componentFactory = this.factory.resolveComponentFactory(this.component);

    // this.elRef.clear();
    // const componentRef = this.elRef.createComponent(componentFactory);

    // (<any>componentRef.instance).data = data;
  }

  private getComponentByAlias(alias: string) {
    return this.templateMapper[alias];
  }

}
