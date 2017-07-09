import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileTabsPage } from './profile-tabs';
import { GeneralPageModule } from '../general/general.module';

@NgModule({
  declarations: [
    ProfileTabsPage,
  ],
  imports: [
    GeneralPageModule,
    IonicPageModule.forChild(ProfileTabsPage),
  ]
})
export class ProfileTabsPageModule {}
