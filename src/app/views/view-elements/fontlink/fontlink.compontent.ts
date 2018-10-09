import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fontlink',
<<<<<<< HEAD
  template: `<ng-container *ngFor="let font of pageData?.fonts">
  <link rel="stylesheet" [href]="font.fontlink | sanitize">
</ng-container>`,

=======
  template: `<ng-container *ngFor="let font of data.templates[0]?.fonts">
  <link rel="stylesheet" [attr.url]="font.fontlink">
</ng-container> `
>>>>>>> 10004425c7a2ed621b1c5aaf57691e24ecafff6c
})
export class fontlinkComponent implements OnInit {
  fontlink;
  @Input() pageData: any;
    
    ngOnInit() {

    }
}