import { Component, OnInit } from '@angular/core';

import { homeDataList } from './home-data';
import { HomeData } from 'src/app/classlib/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  public homeData = homeDataList;
  public unShowData = [];
  public visible = false;

  constructor() {}

  ngOnInit() {}
  public onSelectedMenu(menu, data: HomeData) {
    console.log(data);
    data.menuType = menu.name;
  }
  public setNoData(flag, data: HomeData) {
    data.noData = flag;
  }

  public showDialog() {
    this.visible = true;
  }

  public consoleData(e) {
    console.log(this.visible, e);
  }

}
