import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fontlink',
  template: `<ng-container *ngFor="let font of fonts">
  <link rel="stylesheet" [attr.url]="font.fontlink">
</ng-container> `
})
export class fontlinkComponent implements OnInit {
  @Input() fonts: string;
    
    ngOnInit() {

    }
}