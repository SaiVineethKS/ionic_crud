import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { UsersPage } from '../pages/users/users';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { AddUserPage } from '../pages/add-user/add-user';
import { EditUserPage } from '../pages/edit-user/edit-user';
import { ViewUserPage } from '../pages/view-user/view-user';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {
   FormBuilder,
   FormGroup,
   Validators } from '@angular/forms';
import { GithubUsers } from '../providers/github-users/github-users';
import { User } from '../models/users';

@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    //AddUserPage,
    //EditUserPage
  ],
  imports: [
    BrowserModule,
		HttpClientModule,	
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage
  ],
  providers: [
    StatusBar,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubUsers
  ]
})
export class AppModule {}
