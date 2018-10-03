import { Component, OnInit, AfterViewInit, Input, ChangeDetectorRef } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'lost-view',
  template: `<div [dynamiclost]="pageData"></div>`,
  styleUrls: ['./lost-view-component.component.css']
})
export class LostViewComponent implements OnInit {
  @Input() pageData: Observable<any>;
  
  data = new BehaviorSubject<any>([]);

  dynamiclostComponent: any;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.cdRef.detectChanges();
  }

  ngAfterViewInit() { }

}
