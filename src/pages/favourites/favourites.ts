import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { UserServiceProvider } from './../../providers/user-service/user-service';

/**
 * Generated class for the FavouritesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {
  users: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService: UserServiceProvider,
    public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    const load = this.loadingController.create();
    load.present();
    this.userService.getAll().then(
      (data:any) =>{
        this.users = data.results;
        load.dismiss();
      } 
    )
  }

}
