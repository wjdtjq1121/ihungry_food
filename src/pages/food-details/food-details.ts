import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the FoodDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var window;

@IonicPage()
@Component({
  selector: 'page-food-details',
  templateUrl: 'food-details.html',
})
export class FoodDetailsPage {
  foodInfo: Object;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.foodInfo = navParams.data.foodData;
    console.log(this.foodInfo);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodDetailsPage');
  }

  callIT(passedNumber) {
    // call 버튼 누르면 passednumber 를 string으로 받아서 키패드로 push해주는 function
    window.location = passedNumber;
  }


}
