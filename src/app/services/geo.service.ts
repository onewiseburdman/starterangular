import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';

declare const google: any;

@Injectable({
  providedIn: 'root'
})
export class GeoService {
  private results = new BehaviorSubject<any>([]);

  constructor() { }

  getLocation(): Observable<any> {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          const geocoder = new (google as any).maps.Geocoder();
          const latlng = new google.maps.LatLng(lat, lng);
          const request: google.maps.GeocoderRequest = {
            location: latlng
          };

          geocoder.geocode(request, (results, status) => {
            if (status === google.maps.GeocoderStatus.OK) {
              if (results[0] != null) {
                this.results.next(results[0].address_components);
              } else {
                this.results.next({ error: 'No address available !' });
              }
            }
          });
        },
        error => {
          this.results.next({ error: error.message });
        }
      );

      return this.results.asObservable();
    }
  }


}
