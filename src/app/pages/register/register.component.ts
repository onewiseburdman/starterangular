import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() styles: string;
  fontfamily: any;
  constructor() { }

  ngOnInit() {
    
  }
  setMyStyles() {
    let fontfamily = {
      'font-family': this.fontfamily
    };
    return fontfamily;
  }

}
