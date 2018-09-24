import { AngularFirestore } from 'angularfire2/firestore';
import { leftJoin } from './../../services/collectionJoin';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ContentService } from '../../services/content.service';
import { shareReplay } from 'rxjs/operators';
import { SlideInOutAnimation, SidenavAnimation } from '../../animations/slideinout';
import { BehaviorSubject } from 'rxjs';
declare const google: any;
@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  animations: [SlideInOutAnimation, SidenavAnimation]
})

export class RootComponent implements OnInit {
  @Output() zipEvent 
  status: boolean = false;
  animationState = 'out';
  openedBool: boolean = false;
  collapse: string = 'closed';
  sideNav = 'out';
  pageData = new BehaviorSubject<any>('');
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
  // templateposition = new BehaviorSubject<any>('position');
  constructor(
    private content: ContentService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private afs: AngularFirestore,
   
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
    this.content.loadContent().subscribe(data => {
      
      if (data) {
        this.pageData = data;
        if (this.pageData[0]) {
          this.templatename.next(this.pageData[0].templatename);
        }
      }
      // this.templateposition.next(this.pageData[0].templateposition);
    });
  }
  public sanitizedHtml(value) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

  getData() {
    this.joined = this.afs.collection('organizations', ref => {
      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      query = query.where('orgdomain', '==', this.realm);
      return query;
    })
    .valueChanges()
    .pipe(
      leftJoin(this.afs, 'templatename', 'templates'),
      shareReplay(1)
    );
  }

  public getuserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.lat = position.coords.latitude; // Works fine
          this.lng = position.coords.longitude;  // Works fine

          let geocoder = new google.maps.Geocoder();
          let latlng = new google.maps.LatLng(this.lat, this.lng);
          let request = {
            latLng: latlng
          };

          geocoder.geocode(request, (results, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
              if (results[0] != null) {

                this.street_number = results[0].address_components[0]; 
                this.street = results[0].address_components[1];
                this.city = results[0].address_components[3];
                this.name_state = results[0].address_components[5];
                this.zip = results[0].address_components[7];
                this.zip_4 = results[0].address_components[8]
                this.county = results[0].address_components[4]; 
              } else {
                alert("No address available");
              }
            }
          });
        },
        error => {
          console.log("Error code: " + error.code + "<br /> Error message: " + error.message);
        }
      );
    }
  }

  ngOnInit() {
    this.getContent();
    this.getData();
    this.getuserLocation(); 
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position)=>{
  //       const longitude = position.coords.longitude;
  //       const latitude = position.coords.latitude;
  //       this.callApi(longitude, latitude);
  //       console.log(position);
  //     });
  // } else {
  //    console.log("No support for geolocation")
  // }






}

}



