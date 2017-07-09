import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavouritesPage } from './favourites';
import { UserServiceProvider } from './../../providers/user-service/user-service';

@NgModule({
  declarations: [
    FavouritesPage,
  ],
  imports: [
    IonicPageModule.forChild(FavouritesPage),
  ],
  exports: [
    FavouritesPage
  ],
  providers:[
    UserServiceProvider
  ]
})
export class FavouritesPageModule {}
