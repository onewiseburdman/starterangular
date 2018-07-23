import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

import { 
  AngularFirestore
} from 'angularfire2/firestore';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  path$: string;
  domain$: string;

  constructor(
    private location: Location,
    private afs: AngularFirestore,
    private route: ActivatedRoute
    ) {
    const org = window.location.hostname;
    const path = window.location.pathname.substring(
      window.location.pathname.lastIndexOf('/')
    )
    const newpath = path.substr(1);
    this.path$ = `${newpath}`;
  }
  
}
