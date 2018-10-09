import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fontlink',
  template: `<ng-container *ngFor="let font of data.templates[0]?.fonts">
  <link rel="stylesheet" [href]="font.fontlink | sanitize">
</ng-container>`,

})
export class fontlinkComponent implements OnInit {
  fontlink;
  @Input() pageData: any;
    
    ngOnInit() {

    }
}