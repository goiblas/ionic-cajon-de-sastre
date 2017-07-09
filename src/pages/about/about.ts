import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
contenido:string;

@ViewChild('identificador') otrodiv: HTMLElement;

  constructor(public navCtrl: NavController) {

  }
  addContent(tag: HTMLElement){
    tag.innerText = this.contenido;
    this.otrodiv.innerText = this.contenido;
  }

}
