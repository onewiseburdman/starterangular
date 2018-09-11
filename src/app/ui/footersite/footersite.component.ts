import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'footersite',
  templateUrl: './footersite.component.html',
  styleUrls: ['./footersite.component.css']
})
export class footersiteComponent implements OnInit { 
    @Input() footer: string;
    ngOnInit() {
   
    }
}