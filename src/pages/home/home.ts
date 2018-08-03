
import { Component } from '@angular/core';
import { NavController,App} from 'ionic-angular';
import { UserPage } from './../user/user';
import { CodetribePage } from '../codetribe/codetribe';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public app:App) {

  }

logout():void{
  //api Taken
 const root = this.app.getRootNav();
 root.popToRoot();
}
users():void{
  this.navCtrl.push(UserPage);

}
codetribe(){
  //Api connection
  this.navCtrl.push(CodetribePage);
}

}
