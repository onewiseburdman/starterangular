import { Component, OnInit, AfterViewInit, Input, ChangeDetectorRef } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'home-view',
  template: `<div [dynamichome]="pageData"></div>`,
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {
  @Input() pageData: Observable<any>;
  
  data = new BehaviorSubject<any>([]);
  
  dynamichomeComponent: any;
  

  constructor(private cdRef: ChangeDetectorRef) {
    //
  }

  ngOnInit() {
    this.cdRef.detectChanges();
  }

  ngAfterViewInit() {
    
  }

}
