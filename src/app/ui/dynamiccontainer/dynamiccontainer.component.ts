import { Component, OnInit, AfterViewInit, Input, ChangeDetectorRef } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dynamiccontainer',
  templateUrl: './dynamiccontainer.component.html',
  styleUrls: ['./dynamiccontainer.component.css']
})
export class dynamiccontainerComponent implements OnInit, AfterViewInit {
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
