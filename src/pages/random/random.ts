import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import * as $ from 'jquery';

/**
 * Generated class for the RandomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-random',
  templateUrl: 'random.html',
})
export class RandomPage {
  ran: number = 0;

  spinning() {
    this.ran += Math.random() * (360 + 0) + 2160;
    $(".vertical-container").css({transform: 'rotate(' + this.ran + 'deg)'});
  } 
}