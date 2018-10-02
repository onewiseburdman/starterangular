import { Input, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContentService } from '../../services/content.service';
import { GeoService } from '../../services/geo.service';
import { Observable, combineLatest } from 'rxjs';

@Component({
  selector: 'app-default-view',
  templateUrl: './default-view.component.html',
  styleUrls: ['./default-view.component.css']
})

export class DefaultViewComponent implements OnInit {
  pageData: Observable<any>;

  route0$: any;
  route1$: any;
  route2$: any;
  realm;

  constructor(
    private route: ActivatedRoute,
    private content: ContentService,
    private geo: GeoService
  ) {
    this.realm = document.location.hostname;
    this.route.params.subscribe(params => {
      this.route0$ = params['parent'];
      this.route1$ = params['child'];
      this.route2$ = params['grandchild'];
    });

    this.pageData = combineLatest(this.content.loadContent(), this.geo.getLocation());
  }
  ngOnInit() { }

}