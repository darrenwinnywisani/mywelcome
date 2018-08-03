import { EdittingPage } from './../editting/editting';



import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  //constructor(public navCtrl: NavController) {

  //}
 
//}
  user = {


  }

  userFG: FormGroup;

  constructor(public navCtrl: NavController,private fb:FormBuilder) {
    this.userFG = new FormGroup({
      username: new FormControl('Darren'),
      email: new FormControl('wprecia4@gmail.com'),
      cell: new FormControl('0714549067'),
      password: new FormControl('123456'),
    
       
    })

  this.userFG = this.fb.group({
    username:['Darren',[Validators.required,Validators.minLength(5)]],
    email:['wprecia4@gmail.com',[Validators.required,Validators.email]],
    cell:['0714549067',[Validators.required,Validators.maxLength(10)]],
    password:['123456',[Validators.required,Validators.maxLength(10)]],
    
  })
   }

  submit():void {
   
    this.navCtrl.push(EdittingPage);
    console.log(this.user);
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