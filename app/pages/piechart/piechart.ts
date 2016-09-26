import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var Chart: any;
/*
  Generated class for the PiechartPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/piechart/piechart.html',
})
export class PiechartPage {

  @ViewChild('myChart') private canvas: ElementRef;

  constructor(private navCtrl: NavController) {

  }

  ngAfterViewInit() {
    let data = {
      labels: [
        "Red",
        "Blue",
        "Yellow"
      ],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };
    let ctx = this.canvas.nativeElement;
    let myChart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: {
        // cutoutPercentage: 50
      }
    })
  }

}
