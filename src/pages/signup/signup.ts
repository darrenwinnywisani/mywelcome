import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

import { FormGroup, FormControl, FormBuilder,Validators,  } from '@angular/forms';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  name:string;
  surname:string
  username:string;
  email:string;
  cell:string;
  password:string;

   
  //constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  //}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }


  user = {


  }

  userFG: FormGroup;

  constructor(public navCtrl: NavController,private fb:FormBuilder) {
    this.userFG = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      cell: new FormControl(''),
      password: new FormControl(''),
    
       
    })

  this.userFG = this.fb.group({
    username:['Darren',[Validators.required,Validators.minLength(5)]],
    email:['wprecia@gmail.com',[Validators.required,Validators.email]],
    cell:['0714549067',[Validators.required,Validators.minLength(10)]],
    password:['123456',[Validators.required,Validators.maxLength(10)]],
    
  })
   }

  signup(){
    //Api connection
   console.log(this.user);
    this.navCtrl.push(TabsPage);
  }

  formSubmit({value,valid}:{value:User,valid:boolean}) {
    console.log(value);
    console.log(valid);
   
  }

}

export interface User{
  username:string;
  email:string;
  cell:string;
  password:string;

}
	