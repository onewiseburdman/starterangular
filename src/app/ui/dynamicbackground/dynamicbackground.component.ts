import { Component, OnInit, Input } from '@angular/core';

@Component({
  styleUrls: ['./dynamicbackground.component.css'],
  selector: 'dynamicbackground',
  template: `<ng-container *ngFor="let style of styles">
  <div class="background" [style.background]="'url(' + style.background + ')'"  *ngIf="style.background!=undefined"></div>
  </ng-container> `
})
export class dynamicbackgroundComponent implements OnInit {
  @Input() styles: string;

    ngOnInit() {

    }
}