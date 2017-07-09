import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { UsersPageModule } from '../pages/users/users.module';
import { EventsPageModule } from '../pages/events/events.module';
import { DetailsPageModule } from '../pages/details/details.module';
import { FavouritesPageModule } from '../pages/favourites/favourites.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { GeneralPageModule } from '../pages/general/general.module';
import { ProfileTabsPageModule } from '../pages/profile-tabs/profile-tabs.module';
import { MapPageModule } from  '../pages/map/map.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HighlightDirective } from '../directives/highlight/highlight';
import { UserServiceProvider } from '../providers/user-service/user-service';

import { HttpModule } from '@angular/http';
import { Camera } from "@ionic-native/camera";

import { UserComponentModule } from "./../components/user/user.module";
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    HighlightDirective,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    UserComponentModule,
    DetailsPageModule,
    EventsPageModule,
    FavouritesPageModule,
    MapPageModule,
    ProfilePageModule,
    ProfileTabsPageModule,
    GeneralPageModule,
    UsersPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider, Camera
  ]
})
export class AppModule {}
