import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersPage } from './users';
import { UserComponentModule } from './../../components/user/user.module';

@NgModule({
  declarations: [
    UsersPage,
  ],
  imports: [
    UserComponentModule,
    IonicPageModule.forChild(UsersPage),
  ],
  exports: [
    UsersPage
  ]
})
export class UsersPageModule {}
