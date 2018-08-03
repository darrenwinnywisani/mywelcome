import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EdittingPage } from './editting';

@NgModule({
  declarations: [
    EdittingPage,
  ],
  imports: [
    IonicPageModule.forChild(EdittingPage),
  ],
})
export class EdittingPageModule {}
