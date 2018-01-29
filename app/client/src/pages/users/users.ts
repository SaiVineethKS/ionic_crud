import { Component } from '@angular/core';
import { ModalController, NavController, ToastController } from 'ionic-angular';
import { User } from '../../models/users';
import { AddUserPage } from '../add-user/add-user'
import { EditUserPage } from '../edit-user/edit-user'
import { ViewUserPage } from '../view-user/view-user'
import {  GithubUsers } from '../../providers/github-users/github-users';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users: User[]

  constructor(public navCtrl: NavController, private githubUsers: GithubUsers) {
		console.log('im starting');
    githubUsers.load().subscribe(users => {
      this.users = users.records;
			
			console.log(users);
    })
  }
	addRecord() {
		this.navCtrl.push('AddUserPage');
	}
	editRecord(name,description) {
		this.navCtrl.push('EditUserPage');
	}
	viewRecord(name,description) {
		this.navCtrl.push('ViewUserPage');
	}
}