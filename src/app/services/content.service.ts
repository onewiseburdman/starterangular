import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';

import { leftJoin } from './collectionJoin';

import { Observable,  BehaviorSubject  } from 'rxjs';
import { map, filter, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private zipcode = new BehaviorSubject('43004');
  currentZipcode = this.zipcode.asObservable();
  route0$: any;
  route1$: any;
  route2$: any;
  realm: any;
  routes: Observable<any>;
  contents;
  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        let r = this.route;
        while (r.firstChild) {
          r = r.firstChild;
        }
        r.params.subscribe(params => {
          this.route0$ = params['parent'];
          this.route1$ = params['child'];
          this.route2$ = params['grandchild'];
        });
      });
  }

  loadContent() {
    const realm = document.location.hostname;
    this.routes = this.afs.collection('organizations', ref => {
      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      if (this.route0$) {
        query = query.where(`${this.route0$}`, '==', true);
      } else
      if (this.route1$) {
        query = query.where(`${this.route1$}`, '==', true);
      } else
      if (this.route2$) {
        query = query.where(`${this.route2$}`, '==', true);
      }
      query = query.where('orgdomain', '==', realm);
      return query;
    }).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }),
      leftJoin(this.afs, 'templatename', 'templates'),
      shareReplay(1)
    );
    return this.routes;
  }
}
