import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
