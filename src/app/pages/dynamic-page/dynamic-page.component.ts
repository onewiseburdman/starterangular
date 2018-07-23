import { AngularFirestore } from 'angularfire2/firestore';
import { RootService } from './../../services/root.service';
import { Root } from './../../interfaces/routevariables';
import { ParentService } from './../../services/parent.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.css']
})
export class DynamicPageComponent implements OnInit {

root: Root;
  constructor( 
              private afs: AngularFirestore,
              public route: ActivatedRoute,
              public rootservice: RootService
            ) { }

  ngOnInit() {
    this.root = this.rootservice.root; 
    console.log(this.root);

  }

}
