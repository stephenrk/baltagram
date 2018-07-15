import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { PhotosPage } from '../pages/photos/photos';
import { SendPhotoPage } from '../pages/send-photo/send-photo';
import { ProfilePage } from '../pages/profile/profile';
import { TakePicturePage } from '../pages/take-picture/take-picture';
import { ShowMapPage } from '../pages/show-map/show-map';

export const enviroment = {
  firebase : {
    apiKey: "AIzaSyA8T7ttSCE5DaHDocCXgVu_c1j36FYAMns",
    authDomain: "baltagram-26c5d.firebaseapp.com",
    databaseURL: "https://baltagram-26c5d.firebaseio.com",
    projectId: "baltagram-26c5d",
    storageBucket: "baltagram-26c5d.appspot.com",
    messagingSenderId: "908226415471"
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    PhotosPage,
    SendPhotoPage,
    ProfilePage,
    TakePicturePage,
    ShowMapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(enviroment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    PhotosPage,
    SendPhotoPage,
    ProfilePage,
    TakePicturePage,
    ShowMapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }