import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fontimporter',
  template: `<ng-container *ngFor="let font of fonts">
  <link rel="stylesheet" [attr.url]="font.fontlink">
</ng-container> `
})
export class fontimporterComponent implements OnInit {
  @Input() fonts: string;
    
    ngOnInit() {

    }
}