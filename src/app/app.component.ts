import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from './../pages/profile/profile';
import { FavouritesPage } from './../pages/favourites/favourites';
import { ProfileTabsPage } from './../pages/profile-tabs/profile-tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  pages : any[] = [
    {
      title: 'Home',
      component: TabsPage
    },
    {
      title: 'Profile',
      component: ProfilePage
    },
    {
      title: 'Favourites',
      component: FavouritesPage
    },
    {
      title: 'Profile with tabs',
      component: ProfileTabsPage
    }
  ];

  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(pageName: any){
    this.rootPage = pageName;
  }
}
