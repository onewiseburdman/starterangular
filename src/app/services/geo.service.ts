import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

import { google } from '@google/maps';
declare const google: any;

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  constructor() { }

  getLocation(): Observable<any> {
    
    if (navigator.geolocation) {
      const res = new BehaviorSubject<any>([]);
      navigator.geolocation.getCurrentPosition(
        position => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          const geocoder = new (google as any).maps.Geocoder();
          const latlng = new google.maps.LatLng(lat, lng);
          const request = {
            location: latlng
          };

          geocoder.geocode(request, (results, status) => {
            if (status === google.maps.GeocoderStatus.OK) {
              if (results[0] != null) {
                res.next(results[0].address_components);
              } else {
                res.next({ error: 'No address available !' });
              }
            }
          });
        },
        error => {
          res.next({ error: error.message });
        }
      );
      
      return res.asObservable().pipe(delay(2000));
    }
  }


}
