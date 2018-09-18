import { Component, Input } from '@angular/core';

@Component({
    selector: 'basepagelayout',
    templateUrl: './basepagelayout.component.html'
  })
  export class basepagelayoutComponent {
    @Input() data: any;

  }


  