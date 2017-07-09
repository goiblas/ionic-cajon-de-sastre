import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

avatar: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera)  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

takePicture(){
  const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE,
  sourceType: this.camera.PictureSourceType.CAMERA
}
this.camera.getPicture(options).then( imgData => {
  this.avatar = 'data:image/jpeg;base64,' + imgData;
}, err => console.log(err))
  .catch(err => console.log(err));
  }
}
