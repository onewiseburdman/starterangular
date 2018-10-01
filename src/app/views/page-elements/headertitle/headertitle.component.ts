import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'headertitle',
  templateUrl: './headertitle.component.html',
  styleUrls: ['./headertitle.component.css']
})
export class headertitleComponent implements OnInit { 
  @Input() data: any;
    ngOnInit() {
   
    }
}