import { ActivatedRoute } from '@angular/router';
import { RootService } from '../../services/root.service';
import { LocationService } from '../../services/location.service';
import { Component, OnInit, OnDestroy} from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Root } from './../../interfaces/routevariables';

import { Observable, of, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})



export class RootComponent implements OnInit {
  queryString: string;
  pageData: any;
  locations$;
  seat$;
  city$;
  state$;

  root: Root = {
    rootname: this.path.path$
  };

  constructor(
    private path: LocationService,
    private afs:AngularFirestore,
    private rootservice: RootService,
    private route: ActivatedRoute
    
  ) { 
    this.route.params.subscribe(params => {
     
    });
    
  }

  ngOnInit() {
    this.queryString = this.path.path$;
    this.getLocation(this.queryString);
  }

  getLocation(query: string) {
    const cityRef = this.afs.collection('contents', ref => 
      ref.where('city', '==', `${query}`)
    );
    const stateRef = this.afs.collection('contents', ref => 
      ref.where('state', '==', `${query}`)
    );
    const seatRef = this.afs.collection('contents', ref => 
      ref.where('seat', '==', `${query}`)
    );

    this.locations$ = combineLatest(
        cityRef.valueChanges(),
        stateRef.valueChanges(),
        seatRef.valueChanges()
    ).pipe(switchMap(data => {
      const [city, state, seat] = data;
      const combined = city.concat(state, seat);
      return of(combined);
    }));

    this.locations$.subscribe(data => {
      this.pageData = data;
    });
  }


ngOnDestroy(){
  this.rootservice.root = this.root;

}

}