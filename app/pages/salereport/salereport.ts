import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(private navCtrl: NavController) {
    this.listResults = [
      {
        "branch": "HANOI",
        "noOfSA": "12",
        "HOB": "KHANH",
        "AHOB": "JOHN",
        "officeAdmin": "PETER",
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
        "HOB": "Lee Min Ho",
        "AHOB": "Frank",
        "officeAdmin": "Micheal",
        "carryForward": "12",
        "bookingTarget": "22",
        "bookingCollect": "25",
        "bookingTotal": "33",
        "cancelNo": "3",
        "targetFI": "50",
        "finalFI": "34",
        "percent": "96%"
      }];
  }

}
