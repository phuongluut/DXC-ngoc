import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { PropertyPage } from '../pages/property/property';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatabaseProvider } from '../providers/database/database';
import { HttpClientModule } from '@angular/common/http';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ParticipantPage } from '../pages/participant-survey/participant-survey';
import { AuthProvider } from '../providers/auth/auth';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SignupPage } from '../pages/signup/signup';
import { Validators } from '@angular/forms';
import { auth } from 'firebase';
import { ManageSurveyPageModule } from '../pages/manage-survey/manage-survey.module';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ResultPageModule } from '../pages/result/result.module';
import { AnwserPageModule } from '../pages/anwser/anwser.module';
import { PipesModule } from '../pipes/pipes.module';







@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    PropertyPage,
    ParticipantPage,
    DashboardPage,
    ResetPasswordPage,
    SignupPage,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    ManageSurveyPageModule,
    AngularFireModule.initializeApp(environment.firebase),
    IonicStorageModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    ResultPageModule,
    AnwserPageModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    PropertyPage,
    ParticipantPage,
    DashboardPage,
    ResetPasswordPage,
    SignupPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    AuthServiceProvider,
    AuthProvider,
    AngularFireAuth,

  ]
})
export class AppModule {}
