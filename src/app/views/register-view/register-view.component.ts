import { Component, OnInit, AfterViewInit, Input, ChangeDetectorRef } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'register-view',
  template: `<div [dynamicregister]="pageData"></div>`,
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit {
  @Input() pageData: Observable<any>;
  
  data = new BehaviorSubject<any>([]);

  dynamicregisterComponent: any;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.cdRef.detectChanges();
  }

  ngAfterViewInit() { }

}
