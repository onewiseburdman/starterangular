import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ContentService } from '../../services/content.service';
import { GeoService } from '../../services/geo.service';

import { SlideInOutAnimation, SidenavAnimation } from '../../animations/slideinout';
import { BehaviorSubject, combineLatest } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  animations: [SlideInOutAnimation, SidenavAnimation]
})

export class RootComponent implements OnInit {
  status: boolean = false;
  animationState = 'out';
  openedBool: boolean = false;
  collapse: string = 'closed';
  sideNav = 'out';
  pageData: any;
  route0$: any;
  route1$: any;
  route2$: any;
  joined;
  realm;

  lat;
  lng;

  address;
  street;
  street_number;
  city;
  county;
  name_state;
  zip;
  zip_4;

  // styles;
  // css;
  // layouts;
  // fonts;
  templatename = new BehaviorSubject<any>('default');

  constructor(
    private content: ContentService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private geo: GeoService
  ) {
    this.realm = document.location.hostname;
    this.route.params.subscribe(params => {
      this.route0$ = params['parent'];
      this.route1$ = params['child'];
      this.route2$ = params['grandchild'];
    });
  }

  toggleOpenedBool() {
    this.openedBool = !this.openedBool;
  }

  toggleCollapseIcon() {
  // this.show = !this.show
    this.collapse = this.collapse == 'open' ? 'closed' : 'open';
  }

  toggleShowDiv(divName: string) {
    if (divName === 'divA') {
      this.animationState = this.animationState === 'out' ? 'in' : 'out';
    }
    if (divName === 'divB') {
      this.sideNav = this.sideNav === 'out' ? 'in' : 'out';
    }
  }
  clickEvent() {
      this.status = !this.status;
  }

  getContent() {
    // return this.joined = this.content.loadContent();
    return this.joined = combineLatest(this.content.loadContent(), this.geo.getLocation());
  }

  public sanitizedHtml(value) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

  ngOnInit() {
    this.getContent();
    // this.geo.getLocation().subscribe((data) => {
    //   console.log(data);
    //   this.street_number = data[0];
    //   this.street = data[1];
    //   this.city = data[3];
    //   this.name_state = data[5];
    //   this.zip = data[7];
    //   this.zip_4 = data[8];
    //   this.county = data[4];
    // });
  }

}



