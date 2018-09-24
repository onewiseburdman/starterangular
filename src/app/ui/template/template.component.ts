import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'template-ng',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class templateComponent implements OnInit {
  @Input() data: any;
  @Input ('styles') styles: string;
  @Input() navdata?: any;
    ngOnInit() {
      console.log(this.navdata);
      //
    }
}
