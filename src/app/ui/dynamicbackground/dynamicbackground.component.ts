import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dynamicbackground',
  template: `<ng-container *ngFor="let style of styles" >
  <div [style.background-image]="'url(' + style.background + ')'"></div>
  </ng-container> `
})
export class dynamicbackgroundComponent implements OnInit {
  @Input() styles: string;
    
    ngOnInit() {

    }
}