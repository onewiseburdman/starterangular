import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';


@Component({
  selector: 'generic-view',
  templateUrl: './generic-view.component.html',
  styleUrls: ['./generic-view.component.css']
})
export class GenericViewComponent implements OnInit {
  @Input() pageData: Observable<any>;
  
  data = new BehaviorSubject<any>([]);
  
  route0$: any;
  route1$: any;
  route2$: any;
  
  constructor(
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef
  ) {
   
    this.route.params.subscribe(params => {
      this.route0$ = params['parent'];
      this.route1$ = params['child'];
      this.route2$ = params['grandchild'];
    });
  }
  ngOnInit(){
    this.cdRef.detectChanges();
  }
}
