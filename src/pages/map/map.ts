import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
place: string = " ";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewController: ViewController
  ) {
    this.place = this.navParams.get('place');
  }
  close(){
    this.viewController.dismiss();
  }


}
