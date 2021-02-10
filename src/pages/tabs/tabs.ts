import { Component } from '@angular/core';
import { RandomPage } from '../random/random';
import { HomePage } from '../home/home';
import { TestPage } from '../test/test';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RandomPage;
  tab3Root = TestPage;

  constructor() {

  }
}
