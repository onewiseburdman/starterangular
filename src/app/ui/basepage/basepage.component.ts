import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'basepage',
    templateUrl: './basepage.component.html',
    styleUrls: ['./basepage.component.css']
  })
  export class basepageComponent {
    @Input() data: any;

  }