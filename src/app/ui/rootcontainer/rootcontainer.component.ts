import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rootcontainer',
  templateUrl: './rootcontainer.component.html',
  styleUrls: ['./rootcontainer.component.css']
})
export class RootcontainerComponent implements OnInit {
 @Input() pageData: any;
  ngOnInit() {
   

  }}
