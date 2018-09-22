import { Component, OnInit, Input } from '@angular/core';

@Component({
  styleUrls: ['./dynamicbackground.component.css'],
  selector: 'dynamicbackground',
  template: `<ng-container *ngFor="let style of data.templates[0]?.styles">
  <div class="background" [style.background]="'url(' + style.background.url + ')'" [style.background-repeat]="style.background.repeat" [style.background-size]="style.background.size" *ngIf="style.background"></div>
  </ng-container> `
})
export class dynamicbackgroundComponent implements OnInit {
  @Input() data: any;

  ngOnInit() {

  }
}