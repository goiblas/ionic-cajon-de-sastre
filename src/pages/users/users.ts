import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { User } from './../../components/models/user.model';
import { ItemSliding } from 'ionic-angular';
import { UserComponent } from './../../components/user/user';
/**
 * Generated class for the UsersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  listUsers: User[] = [
    new User('Jesus Olazaf', 'mail@emal.com', './assets/img/3.jpg'),
    new User('Fermin', 'otroemailds@emal.com', './assets/img/7.jpg'),
    new User('Antonio ionic', 'mail@emal.com', './assets/img/11.jpg'),
    new User('Jose Pelpe', 'perspelisnsa@emal.com', './assets/img/43.jpg')
  ] 
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform) {
  }

  clone(clon:any, slider:ItemSliding){
    slider.close();
    this.listUsers.push(clon);
  }
  remove(index, slider:ItemSliding){
    if(!this.platform.is('ios')){
     this.listUsers.splice(index, 1);
    }else {
      console.log('option no disponble en ios')
    }
    slider.close();
  }
}
