import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})

export class RootComponent implements OnInit {
  pageData: any;
  route0$;
  route1$;
  route2$;

  routes;

  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.route.params.subscribe(params => {
     console.log(params);
     this.route0$ = params['parent'];
     this.route1$ = params['child'];
     this.route2$ = params['grandchild'];
     console.log(this.route0$);
    });
  }

  ngOnInit() {
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
    this.routes.subscribe(data => {
      this.pageData = data;
      console.log(this.pageData);
    });
  }

  public sanitizedHtml(value) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}

