import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { Eventmodel } from './../events/events.model';
import { MapPage } from './../map/map';
/**
 * Generated class for the DetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
event: Eventmodel;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertController: AlertController,
    public modalControl: ModalController) {
    this.event = this.navParams.get('event');
  }

  ionViewDidLoad() {
  }
  openMap(){
    const modal = this.modalControl.create(MapPage, {place: this.event.place});
    modal.present();
  }

  showAlert(){
    const alert = this.alertController.create({
      title: this.event.title,
      message: 'Gracias!por tu asistencia, introduce tu email para confirmar',
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        }
      ],
      buttons: [
         {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Aceptar',
        handler: data => {
          const expresionEmail = /\S+@\S+\.\S+/;
          if ( expresionEmail.test(data.email)) {
            console.log('Gracias!', data.email);
          } else {
            console.log('email no valido');
            return false;
          }
        }
      }
      ]
    });
    alert.present();
  }

}
