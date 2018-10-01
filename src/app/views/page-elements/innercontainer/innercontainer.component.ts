import { SlideInOutAnimation, SidenavAnimation } from '../../../animations/slideinout';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'innercontainer',
  templateUrl: './innercontainer.component.html',
  styleUrls: ['./innercontainer.component.css'],
  animations: [SlideInOutAnimation, SidenavAnimation]
})
export class InnercontainerComponent implements OnInit {
  @Input() data: any;
  status: boolean = false;
  animationState = 'out';
  openedBool: boolean = false;
  collapse:string = "closed";
  sideNav= 'out';
  
  constructor() { }

  toggleOpenedBool() { 
    this.openedBool = !this.openedBool; 
  }
  toggleCollapseIcon() {
  // this.show = !this.show
    this.collapse = this.collapse == "open" ? 'closed' : 'open';
  }
  toggleShowDiv(divName: string) {
    if (divName === 'divA') {
      console.log(this.animationState);
      this.animationState = this.animationState === 'out' ? 'in' : 'out';
      console.log(this.animationState);
    }
    if (divName === 'divB') {
      console.log(this.sideNav);
      this.sideNav= this.sideNav === 'out' ? 'in' : 'out';
      console.log(this.sideNav);
    }
  }
  clickEvent(){
    this.status = !this.status;       
}
  ngOnInit() {
   console.log(this.data)
   

  }}