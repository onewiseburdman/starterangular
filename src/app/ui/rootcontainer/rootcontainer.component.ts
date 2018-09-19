import { DynamicComponentDirective } from './../../directives/dynamic-menu.directive';
import { headertopComponent } from './../headertop/headertop.component';
import { Component, OnInit, Input, Output, ComponentFactoryResolver, ViewChild, AfterViewInit, 
  OnDestroy } from '@angular/core';
import {ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'rootcontainer',
  templateUrl: './rootcontainer.component.html',
  styleUrls: ['./rootcontainer.component.css']
})
export class RootcontainerComponent implements OnInit {
 @Input() pageData: any;
  @ViewChild(DynamicComponentDirective) dynamicHost: DynamicComponentDirective;
  dynamicComponent: any;
  interval: any;
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private cdref: ChangeDetectorRef) {
    this.dynamicComponent = headertopComponent;
   
  }

  ngAfterViewInit() {
    this.loadComponent();
    this.cdref.detectChanges();
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
  loadComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.dynamicComponent);

    this.dynamicHost.viewContainerRef.clear();
    this.dynamicHost.viewContainerRef.createComponent(componentFactory);
  }

  ngOnInit() {
   console.log(this.pageData);

  }}
