import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from './../tabs/tabs';
import { FormGroup, FormControl, FormBuilder,Validators,  } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username:string;
  password:string;


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  user = {
    preferences: {

    }

  }

  userFG: FormGroup;

  constructor(public navCtrl: NavController,private fb:FormBuilder) {
    this.userFG = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      
    })

  this.userFG = this.fb.group({
    username:['',[Validators.required,Validators.minLength(5)]],
    password:['',[Validators.required,Validators.maxLength(10)]],
  
    })
  
   }
   

   login(){
    //Api connection
    this.navCtrl.push(TabsPage);
    console.log(this.user);
  }

  formSubmit({value,valid}:{value:User,valid:boolean}) {
    console.log(value);
    console.log(valid);
   
  }

}

export interface User{
  username:string;
  password:string;
 
}

