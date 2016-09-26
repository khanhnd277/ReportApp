import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var Chart: any;

/*
  Generated class for the LinechartPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/linechart/linechart.html',
})
export class LinechartPage {


  @ViewChild('myChart') private canvas: ElementRef;


  constructor(private navCtrl: NavController) {

  }

  ngAfterViewInit() {
    let data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#ff0000",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 3,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40],
        }
      ]
    };

    let ctx = this.canvas.nativeElement;
    let myChart = new Chart(ctx, {
      type: 'line',
      // data: {
      //   datasets: [{
      //     label: 'Scatter Dataset',
      //     data: [{
      //       x: -10,
      //       y: 0
      //     }, {
      //         x: 0,
      //         y: 10
      //       }, {
      //         x: 10,
      //         y: 5
      //       }]
      //   }]
      // },
      // options: {
      //   scales: {
      //     xAxes: [{
      //       type: 'linear',
      //       position: 'bottom'
      //     }]
      //   }
      // }
      data: data,
      options: {
        showLines: true,
        spanGaps: true,
      }
    })
  }


}
