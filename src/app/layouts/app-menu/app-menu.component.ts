import { Component, OnInit } from '@angular/core';
import { MenuData } from 'src/app/classlib/app-menu';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.less']
})
export class AppMenuComponent implements OnInit {

  public menuList: MenuData[] = [];
  constructor() { }

  ngOnInit() {
    const urlTop = '/assets/images/menu/menu-';
    this.menuList = [
      new MenuData('首页', urlTop + '1', '/home', null),
      new MenuData('拓扑管理', urlTop + '2', '1', null),
      new MenuData('业务管理', urlTop + '3', '1', null),
      new MenuData('资源管理', urlTop + '4', '1', null),
      new MenuData('虚拟化', urlTop + '5', '1', null),
      new MenuData('存储管理', urlTop + '6', '1', null),
      new MenuData('告警管理', urlTop + '7', '1', null),
      new MenuData('智能工具', urlTop + '8', '1', null),
      new MenuData('巡检管理', urlTop + '9', '1', null),
      new MenuData('报表管理', urlTop + '10', '1', null),
      new MenuData('系统管理', urlTop + '11', '1', null),
    ];
  }

  changeRouter(data) {
  }

}
