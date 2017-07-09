import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { allEvents, Eventmodel } from './events.model';
import { DetailsPage } from './../details/details';

/**
 * Generated class for the EventsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

eventos: Eventmodel[] = allEvents;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }
  handlerEvent(evento: any ){
    this.navCtrl.push(DetailsPage, {
      event: evento
    })
  }
}