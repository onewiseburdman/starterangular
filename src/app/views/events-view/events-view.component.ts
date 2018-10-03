import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'events-view',
  template: `<div [dynamicevents]="pageData"></div>`,
  styleUrls: ['./events-view.component.css']
})
export class EventsViewComponent implements OnInit {
  @Input() pageData: Observable<any>;
  
  data = new BehaviorSubject<any>([]);
  
  dynamiceventsComponent: any;
  

  constructor(private cdRef: ChangeDetectorRef) {
    //
  }

  ngOnInit() {
    this.cdRef.detectChanges();
  }

  ngAfterViewInit() {
    
  }

}
