import { AngularFirestore } from 'angularfire2/firestore';
import { leftJoin } from './../../services/collectionJoin';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ContentService } from '../../services/content.service';
import { shareReplay } from 'rxjs/operators';
import { SlideInOutAnimation, SidenavAnimation } from '../../animations/slideinout';
import { BehaviorSubject } from 'rxjs';

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
  collapse: string = "closed";
  sideNav= 'out';
  pageData: any;
  route0$: any;
  route1$: any;
  route2$: any;
  joined;
  realm;
  styles;
  templatename = new BehaviorSubject<any>('default');

  constructor(
    private content: ContentService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private afs: AngularFirestore
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
    this.collapse = this.collapse == "open" ? 'closed' : 'open';
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
      this.pageData = data;
      this.templatename.next(this.pageData[0].templatename);
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
    ).subscribe((data) => {
      console.log(data);
      this.styles = data[0].templates[0].styles;
    });
  }

  ngOnInit() {
    this.getContent();
    this.getData();
  }
 
}

