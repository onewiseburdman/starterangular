import { Component, OnInit, Input } from '@angular/core';

@Component({
  styleUrls: ['./dynamicbackgroundsolid.component.css'],
  selector: 'dynamicbackgroundsolid',
  template: `<ng-container *ngFor="let style of data.templates[0]?.styles">
  <div class="background" [style.backgroundColor]="style.background.bgcolor" *ngIf="style.background"></div>
  </ng-container> `
})
export class dynamicbackgroundsolidComponent implements OnInit {
  @Input() data: any;

  ngOnInit() {

  }
}