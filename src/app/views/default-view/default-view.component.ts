import { Input, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-default-view',
  templateUrl: './default-view.component.html',
  styleUrls: ['./default-view.component.css']
})

export class DefaultViewComponent implements OnInit {
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
  ngOnInit() { }
}
