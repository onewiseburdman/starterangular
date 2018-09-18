import { basepagemenuComponent } from './../basepagemenu/basepagemenu.component';
import { basepageComponent } from './../basepage/basepage.component';

import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'basepagelayoutitem',
    templateUrl: './basepagelayoutitem.component.html'
  })
  export class basepagelayoutitemComponent {
    @Input() pageData: any;
    @ViewChild('container', {read: ViewContainerRef}) private container: ViewContainerRef;
    readonly templateMapper = {
        basepagemenu: basepagemenuComponent
      };
    constructor(private componentFactoryResolver: ComponentFactoryResolver){}
    ngOnInit() {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.getComponentForElementType(this.pageData.templatename));
        const viewContainerRef = this.container;
        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent(componentFactory);
        (<basepageComponent>componentRef.instance).pageData = this.pageData;
      }
      private getComponentForElementType(templatename) {
        return this.templateMapper[templatename];
      }
  }