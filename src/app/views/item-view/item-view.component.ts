import { Component, OnInit, AfterViewInit, Input, ChangeDetectorRef } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-item-view',
  template: `<div [dynamicitem]="pageData"></div>`,
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {
  @Input() pageData: Observable<any>;
  
  data = new BehaviorSubject<any>([]);

  dynamicitemComponent: any;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.cdRef.detectChanges();
  }

  ngAfterViewInit() { }

}
