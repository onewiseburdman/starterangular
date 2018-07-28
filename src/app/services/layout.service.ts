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

  constructor(public afs: AngularFirestore, private content: ContentService) {
  }

  loadLayout() {
    this.content.loadContent().subscribe(data => {
      this.contentData = data[0];
      this.layoutCollection = this.afs.collection('layouts', ref => {
        ref.where('layoutname', '==', `${this.contentData.layoutname}`);
        return ref;
      });
      this.layouts = this.layoutCollection.valueChanges();
    });
  }
}
