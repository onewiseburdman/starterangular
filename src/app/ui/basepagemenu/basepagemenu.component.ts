import { basepageComponent } from './../basepage/basepage.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'basepagemenu',
    templateUrl: './basepagemenu.component.html',
    styleUrls: ['./basepagemenu.component.css']
  })
  export class basepagemenuComponent extends basepageComponent {
    @Input() pageData: any;
  
  
   
      
      ngOnInit() {
  
      }
  }