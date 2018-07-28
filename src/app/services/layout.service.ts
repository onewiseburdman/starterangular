import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ContentService } from './content.service';

import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  layoutCollection: AngularFirestoreCollection<any>;
  layouts: Observable<any>;
  finalData: Observable<any>;
  contentData: any;
  subject = new BehaviorSubject<string>('default');

  constructor(public afs: AngularFirestore, private content: ContentService) {
    this.content.loadContent().subscribe(data => {
      this.contentData = data[0];
      this.subject.next(data[0].layoutname);
    });
  }

  loadLayout() {
    this.layoutCollection = this.afs.collection('layouts', ref => {
      ref.where('layoutname', '==', `${this.subject}`);
      return ref;
    });
    this.layouts = this.layoutCollection.valueChanges();
    return this.layouts;
  }
}
