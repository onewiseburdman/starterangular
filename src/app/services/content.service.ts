import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  route0$: any;
  route1$: any;
  route2$: any;

  routes: Observable<any>;

  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router
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
    this.routes = this.afs.collection('contents', ref => {
      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      if (this.route0$) {
        query = query.where(`${this.route0$}`, '==', true);
      }
      if (this.route1$) {
        query = query.where(`${this.route1$}`, '==', true);
      }
      if (this.route2$) {
        query = query.where(`${this.route2$}`, '==', true);
      }
      return query;
    }).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    return this.routes;
  }
}
