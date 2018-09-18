import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'cssimporter',
  template: `<ng-container *ngFor="let style of styles">
  <link rel="stylesheet" [attr.url]="sanitizer.bypassSecurityTrustResourceUrl + '(' + style.cascadelink + ')'">
</ng-container> `
})
export class cssimporterComponent implements OnInit {
  cascadelink;
  url;
  constructor(public sanitizer: DomSanitizer) {

  }


  @Input() styles: string;
    
    ngOnInit() {

    }
}