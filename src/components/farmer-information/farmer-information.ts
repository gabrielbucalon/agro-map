import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'farmer-information',
  templateUrl: 'farmer-information.html'
})
export class FarmerInformationComponent {
  infFarmer: any;
  test: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    this.infFarmer = navParams.get('elem');
    console.log(this.infFarmer);
  }

  close(bol: boolean) {
		this.viewCtrl.dismiss(bol);
	}

}
