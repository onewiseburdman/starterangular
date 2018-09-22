import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class templateComponent implements OnInit {
  @Input() data: any;
  @Input ('styles') styles: string;
  @Input ('title') title: string;
    ngOnInit() {
      //
    }
}