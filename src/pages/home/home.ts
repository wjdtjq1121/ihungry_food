import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';  
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // searchQuery : string = '';
  // items: string[];
  foods:Array<any>;
  stores = 'All';

  constructor(public navCtrl: NavController, public http: Http, public alertCtrl: AlertController) {
    this.initializeItems();
    this.http.get('assets/data/data.json')
            .map(res => res.json())
            .subscribe(data => {
                this.foods = data;
            })
  }


  initializeItems() {
      //get name strings from json file to items array
      //왜 'string'을 'string[]'에 할당할 수 없지?
      this.http.get('assets/data/data.json').map(res => res.json).subscribe(data => {this.items = data.name});
  }
  // getItems(ev: any){
  //   this.initializeItems();

  //   const val = ev.target.value;

  //   if (val && val.trim() != '') {
  //     this.items = this.items.filter((item) => {
  //       return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     })
  //   }
  // }
 //각각 segment에서 왼쪽/오른쪽 구분해서 function call 해줘서 ngSwitchCase를 바꿔줌
  alltochicken(){
    this.stores = 'Chickens';
  }
  chickentoall(){
    this.stores='All';
  }
  chickentoothers(){
    this.stores='Others';
  }
  otherstochicken(){
    this.stores='Chickens';
  }
  /* 왼쪽 오른쪽 헷갈릴 때는 여기 참고
  swipeleft(event){
    console.log(event.direction)   //화면의 오른쪽에서 왼쪽으로 밀 때 2  (all -> chicken -> others)
    this.stores = 'Chickens'
  }
  swiperight(event){
    console.log(event.direction)   //화면의 왼쪽에서 오른쪽으로 밀 때 4 (all <- chkcien <- others)
  }
  */
  showAlert() {
    //ion-button click하면 이 function call, alert 창 띄움
    let alert = this.alertCtrl.create({
      title: '버그 및 문의사항 제보',
      subTitle: 'ideliverycra@gmail.com',
      message: 'ⓒ2018, CRA All Rights Reserved',
      buttons: ['OK']
    });
    alert.present();
  }

  goFoodDetails(store){
    this.navCtrl.push("FoodDetailsPage", { foodData: store });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParkListPage');
  }

}
