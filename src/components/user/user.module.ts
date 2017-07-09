import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { UserComponent } from './user';
import { EllipsePipe } from './../../pipes/ellipse/ellipse';

@NgModule({
  declarations: [
    UserComponent,
    EllipsePipe
  ],
  imports: [
    IonicModule
  ],
  exports: [
    UserComponent,
    EllipsePipe
  ]
})
export class UserComponentModule {}
