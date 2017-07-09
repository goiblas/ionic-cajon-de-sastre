import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms'
/**
 * Generated class for the GeneralPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

const userDefault = {
  'name': 'Pedro',
  'lastname': 'Gonzalez',
  'passGroup': {
    'pass1':'aaa',
    'pass2': 'aaa'
  }
}
@IonicPage()
@Component({
  selector: 'page-general',
  templateUrl: 'general.html',
})
export class GeneralPage {

  registerForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formbuilder: FormBuilder) {
    this.buildForm();
  }
  ionViewDidLoad() {

  }
  buildForm(){
     this.registerForm = this.formbuilder.group({
        'name': ['Jesus', [Validators.required, Validators.pattern(/^[a-zA-Z]{3,16}$/)]],
        'lastname': ['', Validators.required],
        'passGroup': this.formbuilder.group({
          'pass1':['', [Validators.required]],
          'pass2': ['', [Validators.required]]
        }, {validator: this.matchpass})
      })
  }
  matchpass(c:AbstractControl){
    if(c.get('pass1').value === c.get('pass2').value){
      return null;
    }else {
      return { 'no coincide': true}
    }
  }
  completar(){
    this.registerForm.patchValue(userDefault);
  }
  saveData(){
    console.log(this.registerForm.value);
  }

}
