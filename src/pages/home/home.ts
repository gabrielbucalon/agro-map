import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import {} from 'googlemaps';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }
  @ViewChild('map') mapElement: any;
  map: google.maps.Map;

  ngOnInit(): void {
    const mapProperties = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
  }

}
