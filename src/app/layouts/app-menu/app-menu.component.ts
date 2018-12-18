import { Component, OnInit } from '@angular/core';
import { MenuData, MenuActiveController } from 'src/app/classlib/app-menu';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.less']
})
export class AppMenuComponent implements OnInit {

  public menuList: MenuData[] = [];
  public menuActiveController = new MenuActiveController();
  constructor() { }

  ngOnInit() {
    const urlTop = '/src/assets/images/menu/menu-';
    this.menuList = [
      new MenuData('首页', urlTop + '1', '', null),
      new MenuData('拓扑管理', urlTop + '2', '', null),
      new MenuData('业务管理', urlTop + '3', '', null),
      new MenuData('资源管理', urlTop + '4', '', null),
      new MenuData('虚拟化', urlTop + '5', '', null),
      new MenuData('存储管理', urlTop + '6', '', null),
      new MenuData('告警管理', urlTop + '7', '', null),
      new MenuData('智能工具', urlTop + '8', '', null),
      new MenuData('巡检管理', urlTop + '9', '', null),
      new MenuData('报表管理', urlTop + '10', '', null),
      new MenuData('系统管理', urlTop + '11', '', null),
    ];
    this.menuActiveController.setActiveData(this.menuList[0]);
  }

}
