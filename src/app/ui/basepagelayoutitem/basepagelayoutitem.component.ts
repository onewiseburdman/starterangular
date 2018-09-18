import { basepagemenuComponent } from './../basepagemenu/basepagemenu.component';
import { basepageComponent } from './../basepage/basepage.component';

import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'basepagelayoutitem',
    templateUrl: './basepagelayoutitem.component.html'
  })
  export class basepagelayoutitemComponent {
    @Input() data: any;
    @ViewChild('container', {read: ViewContainerRef}) private container: ViewContainerRef;
    readonly templateMapper = {
        basepagemenu: basepagemenuComponent
      };
    constructor(private componentFactoryResolver: ComponentFactoryResolver){}
    ngOnInit() {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.getComponentForCardType(this.data.cardType));
        const viewContainerRef = this.container;
        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent(componentFactory);
        (<basepageComponent>componentRef.instance).data = this.data;
      }
      private getComponentForCardType(cardType) {
        return this.templateMapper[cardType];
      }
  }