import { ContentService } from './../../services/content.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'site-view',
  templateUrl: './site-view.component.html',
  styleUrls: ['./site-view.component.css']
})
export class SiteViewComponent implements OnInit {
  route0$: any;
  route1$: any;
  route2$: any;
  realm;

  constructor(
    private route: ActivatedRoute
  ) {
    this.realm = document.location.hostname;
    this.route.params.subscribe(params => {
      this.route0$ = params['parent'];
      this.route1$ = params['child'];
      this.route2$ = params['grandchild'];
    });
  }
  ngOnInit(){}
}
