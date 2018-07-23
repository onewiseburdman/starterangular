
import { AngularFirestore } from 'angularfire2/firestore';
import { LocationService } from '../../services/location.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-page-parent',
  templateUrl: './dynamic-page-parent.component.html',
  styleUrls: ['./dynamic-page-parent.component.css']
})
export class DynamicPageParentComponent implements OnInit {

  constructor(
    private path:LocationService,
    private afs:AngularFirestore ) {
    
    
   }

  ngOnInit() {
   

}

}