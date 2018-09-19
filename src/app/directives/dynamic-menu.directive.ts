// tslint:disable-next-line:max-line-length
import { Directive, Input, OnInit, ViewContainerRef, AfterViewInit, OnDestroy, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { headertopComponent } from '../ui/headertop/headertop.component';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[d-menu]'
})
export class DynamicComponentDirective implements OnInit, OnDestroy, AfterViewInit {
  @Input() data: any;

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
    console.log(this.elRef);
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
    (<any>componentRef.instance).data = this.data;
  }
}
