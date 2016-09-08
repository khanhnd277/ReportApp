import { Component } from '@angular/core';
import { NavController, ViewController, NavParams} from 'ionic-angular';

/*
  Generated class for the ModalContentPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/modal-content/modal-content.html',
})
export class ModalContentPage {
  private user: any;
  constructor(private navCtrl: NavController, private viewCtrl: ViewController, private navParam: NavParams) {
    this.user = navParam.get('user');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
