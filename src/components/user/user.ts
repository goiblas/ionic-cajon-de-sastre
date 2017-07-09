import { Component, Input } from '@angular/core';
import { User } from './../models/user.model';
import { AlertController } from 'ionic-angular';
import { EllipsePipe } from './../../pipes/ellipse/ellipse';

/**
 * Generated class for the UserComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'goi-user',
  templateUrl: 'user.html'
})
export class UserComponent {
@Input() user : User;

  constructor( public alertController: AlertController) {
  }

  show(){
    const alert = this.alertController.create({
      title: this.user.name,
      subTitle: 'La dirección de correo el ' +  this.user.email,
      buttons: ['Aceptar']
    });
    alert.present();
  }

}
