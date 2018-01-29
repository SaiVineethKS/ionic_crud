import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { map} from 'rxjs/operators';
import 'rxjs/Rx';
 

 
@IonicPage()
@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})
 
export class AddUserPage {
 
    authForm: FormGroup;
 
    constructor(public nav: NavController, public navParams: NavParams, public formBuilder: FormBuilder,public http: HttpClient) {
 
        this.nav = nav;
 
        this.authForm = formBuilder.group({
            username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(8), Validators.maxLength(30)])],
            description: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z_ ]*$'), Validators.minLength(8), Validators.maxLength(30)])]
        });
    }
 
    onSubmit(value: any): void { 
        if(this.authForm.valid) {
            window.localStorage.setItem('username', value.username);
            window.localStorage.setItem('description', value.password);
            console.log(value.username);
					  console.log(value.description);
			var myData = JSON.stringify({username: value.username,description : value.description});
 var link = 'http://localhost:8080/api/gallery';
	
 this.http.post(link, myData).subscribe(data => { 
 }, error => {
 console.log("Oooops!");
 });
 }
    }
}
