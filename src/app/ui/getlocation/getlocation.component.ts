import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'getlocation',
  templateUrl: './getlocation.component.html',
  styleUrls: ['./getlocation.component.css']
})

export class GetlocationComponent implements OnInit {
  constructor() { }

  ngOnInit() {
   
   
  }


  callApi(Longitude: number, Latitude: number){
    const url = `https://api-adresse.data.gouv.fr/reverse/?lon=${Longitude}&lat=${Latitude}`
    //Call API
  }

}
