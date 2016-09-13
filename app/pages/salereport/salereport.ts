import { Component } from '@angular/core';
import { NavController, AlertController, ModalController } from 'ionic-angular';
import { ModalContentPage } from '../modal-content/modal-content';

/*
  Generated class for the SalereportPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/salereport/salereport.html',
})
export class SalereportPage {

  private listResults: any;
  public items: any;
  private searchCondition: string;
  

  constructor(private navCtrl: NavController, public alertCtrl: AlertController, public modalCtrl: ModalController) {
    
    this.items = new Array;
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
        "branch": "VIET NAM",
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
      },
      {
        "branch": "KANGGOR",
        "noOfSA": "34",
        "HOB": {
          "name": "Lionel Messi",
          "mobile": "08736453535",
          "image": "messi.jpg",
          "email": "messi@yahoo.com"
        },
        "AHOB": {
          "name": "Jessica Alba",
          "mobile": "8654789997",
          "image": "jessica.png",
          "email": "jessica@yahoo.com"
        },
        "officeAdmin": "ChungNT",
        "carryForward": "34",
        "bookingTarget": "33",
        "bookingCollect": "67",
        "bookingTotal": "12",
        "cancelNo": "343",
        "targetFI": "150",
        "finalFI": "56",
        "percent": "44%"
      },
      {
        "branch": "LANGKAWI",
        "noOfSA": "28",
        "HOB": {
          "name": "PSY",
          "mobile": "08645664533",
          "image": "PSY.jpg",
          "email": "psy@yahoo.com"
        },
        "AHOB": {
          "name": "Thien TV",
          "mobile": "08876629863",
          "image": "thientv.jpg",
          "email": "thientv@yahoo.com"
        },
        "officeAdmin": "Geogre",
        "carryForward": "3",
        "bookingTarget": "49",
        "bookingCollect": "65",
        "bookingTotal": "74",
        "cancelNo": "23",
        "targetFI": "100",
        "finalFI": "99",
        "percent": "99%"
      },
      {
        "branch": "PENANG",
        "noOfSA": "45",
        "HOB": {
          "name": "Lord Bendtner",
          "mobile": "08635432523",
          "image": "bendtner.jpg",
          "email": "bendtner@yahoo.com"
        },
        "AHOB": {
          "name": "King Welbeck",
          "mobile": "0947436434",
          "image": "welbeck.jpg",
          "email": "welbeck@yahoo.com"
        },
        "officeAdmin": "Hua Thanh Ha",
        "carryForward": "22",
        "bookingTarget": "34",
        "bookingCollect": "54",
        "bookingTotal": "78",
        "cancelNo": "20",
        "targetFI": "98",
        "finalFI": "50",
        "percent": "49%"
      },
      {
        "branch": "MALAYSIA",
        "noOfSA": "130",
        "HOB": {
          "name": "REGION",
          "mobile": ""
        },
        "AHOB": {
          "name": "SUB",
          "mobile": ""
        },
        "officeAdmin": "TOTAL",
        "carryForward": "124",
        "bookingTarget": "345",
        "bookingCollect": "222",
        "bookingTotal": "164",
        "cancelNo": "59",
        "targetFI": "300",
        "finalFI": "200",
        "percent": "66%"
      }
    ];

    this.initializeItems();
    this.searchCondition = '';
  }

  initializeItems() {
    this.items.length = 0;
    this.listResults.forEach(element => {
      this.items.push(element.branch);
    });
  }

  showInfo(item) {
    let modal = this.modalCtrl.create(ModalContentPage, { user: item });
    modal.present();
  }

  isTotal(branch: string): boolean {
    if (branch.indexOf('REGION') >= 0) {
      return true;
    } else {
      return false;
    }

  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();
    document.getElementById('branchList').removeAttribute("hidden");
    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}


