import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'headertop',
  templateUrl: './headertop.component.html',
  styleUrls: ['./headertop.component.css']
})
export class headertopComponent implements OnInit {
  @Input() data: any;

  @Input ('title') title: string;
  @Input ('icons') icons: string;
    
    ngOnInit() {
      //
    }
}