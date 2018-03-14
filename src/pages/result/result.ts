import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import {AngularFirestore} from 'angularfire2/firestore';
/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 export interface DATA{
   count:number,
   answer:string
 }

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  @ViewChild('pieCanvas') pieCanvas;
  pieChart: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private firestore:AngularFirestore) {
  }

  ionViewDidLoad() {
    const firestore = this.firestore.collection<DATA>('result');

    
    firestore.valueChanges().subscribe(res =>{
      console.log(res)
      this.getPieChart(res);
    })
  }
  getChart(context, chartType, data, options?) {
    return new Chart(context, {
      type: chartType,
      data: data,
      options: options
    });
  }
  getPieChart(dataPie:DATA[]) {
    let sourceCount = new Array<number>();

    dataPie.forEach(e => {
      sourceCount.push(e.count);
    });
    console.log(sourceCount)
    let data = {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [
        {
          data: sourceCount,
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }]
    };
 
    return this.getChart(this.pieCanvas.nativeElement, "pie", data);
 
  }
}
