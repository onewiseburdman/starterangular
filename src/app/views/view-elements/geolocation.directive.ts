import { Directive, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';

import { GeoService } from '../../services/geo.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[geolocate]'
})
export class GeolocationDirective implements OnInit {
  elRef: any;
  @Output() data = new EventEmitter<any>();

  constructor(private geo: GeoService, private ref: ElementRef) {
    this.elRef = this.ref.nativeElement;
  }

  ngOnInit() {
    this.geo.getLocation().subscribe((data) => {
      this.data.emit(data);
    });
  }

}
