import { Component, OnInit, AfterViewInit, Input, ChangeDetectorRef } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'rootcontainer',
  templateUrl: './rootcontainer.component.html',
  styleUrls: ['./rootcontainer.component.css']
})
export class RootcontainerComponent implements OnInit, AfterViewInit {
  @Input() pageData: Observable<any>;
 

  data = new BehaviorSubject<any>([]);
  
  dynamicComponent: any;
  

  constructor(private cdRef: ChangeDetectorRef) {
    //
  }

  ngOnInit() {
    this.cdRef.detectChanges();
  }

  ngAfterViewInit() {
    
  }

}
