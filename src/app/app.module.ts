// import { DynamicComponentDirective } from './directives/dynamic-menu.directive';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserTransferStateModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
//app router
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//single pages module 
import { PagesModule } from './pages/pages.module';
//environment
import { environment } from '../environments/environment';
//firestore
import { AngularFireModule } from 'angularfire2';
export const firebaseConfig = environment.firebaseConfig;
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireFunctionsModule } from 'angularfire2/functions';
//temp 

import { DynamicModule } from './directives/dynamic/dynamic.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'whoisrunningfor' }),
    BrowserTransferStateModule,
    PagesModule,
    DynamicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }