import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { ContentService } from '../../services/content.service';
import { LayoutService } from '../../services/layout.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})

export class RootComponent implements OnInit {
  pageData: any;
  pageLayout: any;
  route0$: any;
  route1$: any;
  route2$: any;

  constructor(
    private content: ContentService,
    private layout: LayoutService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.route0$ = params['parent'];
      this.route1$ = params['child'];
      this.route2$ = params['grandchild'];
    });
  }

  ngOnInit() {
    this.getContent();
    this.getTemplate();
  }

  getContent() {
    this.content.loadContent().subscribe(data => {
      this.pageData = data;
      console.log(this.pageData);
    });
  }

  getTemplate() {
    this.layout.loadLayout().subscribe(data => {
      this.pageLayout = data[0];
    });
  }

  public sanitizedHtml(value) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}

