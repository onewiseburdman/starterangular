import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'csslink',
  template: `<ng-container *ngFor="let style of data.templates[0]?.styles">
  <link rel="stylesheet" [href]="style.cascadelink | sanitize">
</ng-container> `
})
export class csslinkComponent implements OnInit {
  cascadelink;
  url;
  constructor() {

  }

  @Input() data: any;

  ngOnInit() {

  }

}
