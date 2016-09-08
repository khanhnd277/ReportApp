import { Component } from '@angular/core';
import { NavController, AlertController, ModalController } from 'ionic-angular';
import {ModalContentPage} from '../modal-content/modal-content';

/*
  Generated class for the SalereportPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/salereport/salereport.html',
})
export class SalereportPage {

  private listResults;

  constructor(private navCtrl: NavController, public alertCtrl: AlertController, public modalCtrl: ModalController) {
    this.listResults = [
      {
        "branch": "HANOI",
        "noOfSA": "12",
        "HOB": {
          "name": "Khanh",
          "mobile": "0974563783",
          "image": "khanh.jpg", 
          "email": "khanhnd@yahoo.com"
        },
        "AHOB": {
          "name": "Eminem",
          "mobile": "5069506003",
          "image": "eminem.jpg", 
          "email": "holm@yahoo.com"
        },
        "officeAdmin": "Peter",
        "carryForward": "6",
        "bookingTarget": "34",
        "bookingCollect": "15",
        "bookingTotal": "21",
        "cancelNo": "3",
        "targetFI": "25",
        "finalFI": "12",
        "percent": "69%"
      },
      {
        "branch": "HO CHI MINH",
        "noOfSA": "30",
        "HOB": {
          "name": "Tom Cruise",
          "mobile": "0973372344",
          "image": "tomcruise.jpg", 
          "email": "tom@yahoo.com"
        },
        "AHOB": {
          "name": "Park Ji Sung",
          "mobile": "985985895",
          "image": "parkjisung.jpg", 
          "email": "jspark@yahoo.com"
        },
        "officeAdmin": "Micheal",
        "carryForward": "12",
        "bookingTarget": "22",
        "bookingCollect": "25",
        "bookingTotal": "33",
        "cancelNo": "3",
        "targetFI": "50",
        "finalFI": "34",
        "percent": "96%"
      },
      {
        "branch": "total_VIET NAM",
        "noOfSA": "50",
        "HOB": {
          "name": "REGION",
          "mobile": ""
        },
        "AHOB": {
          "name": "SUB",
          "mobile": ""
        },
        "officeAdmin": "TOTAL",
        "carryForward": "34",
        "bookingTarget": "56",
        "bookingCollect": "77",
        "bookingTotal": "45",
        "cancelNo": "8",
        "targetFI": "88",
        "finalFI": "56",
        "percent": "50%"
      }
    ];
  }

  getInfoHOB(item) {
    let modal = this.modalCtrl.create(ModalContentPage, {user : item});
    modal.present();
  }

}
