import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the ProfileTabsPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-profile-tabs',
  templateUrl: 'profile-tabs.html'
})
@IonicPage()
export class ProfileTabsPage {

  generalRoot = 'GeneralPage'
  alertasRoot = 'AlertasPage'


  constructor(public navCtrl: NavController) {}

}
