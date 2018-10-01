import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit {
  @Input() styles: any;
  fontfamily: any;
  constructor() { }

  ngOnInit() {
    console.log(this.styles);
  }
  setMyStyles(value) {
    const fontfamily = {
      'font-family': value.fontfamily
    };
    return fontfamily;
  }

}
