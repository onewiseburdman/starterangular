import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fontimporter',
  template: `<ng-container *ngFor="let style of styles">
  <link rel="stylesheet" [attr.url]="style.fontlink">
</ng-container> `
})
export class fontimporterComponent implements OnInit {
  @Input() styles: string;
    
    ngOnInit() {

    }
}