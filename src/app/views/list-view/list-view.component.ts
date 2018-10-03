import { Component, OnInit, AfterViewInit, Input, ChangeDetectorRef } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'list-view',
  template: `<div [dynamiclist]="pageData"></div>`,
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  @Input() pageData: Observable<any>;
  
  data = new BehaviorSubject<any>([]);
  dynamiclistComponent: any;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.cdRef.detectChanges();
  }

  ngAfterViewInit() { }

}
