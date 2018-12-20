import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-div-menu',
  templateUrl: './home-div-menu.component.html',
  styleUrls: ['./home-div-menu.component.less']
})
export class HomeDivMenuComponent implements OnInit {

  @Output() selectedMenu = new EventEmitter();
  @Input() menuName = '';
  @Input() set menuList(data) {
    this.realMenuList = data;
  }
  @Input() set defaultMenu(menu) {
    console.log(menu);
    if (typeof menu === 'string') {
      this.choosedMenu = this.realMenuList.find(v => v.name === menu);
    } else {
      this.choosedMenu = menu;
    }
  }
  realMenuList = [{
    name: '图表',
    data: null
  }, {
    name: '列表',
    data: null
  }, {
    name: '移除',
    data: null
  }];

  public choosedMenu = this.realMenuList[0];

  constructor() { }

  ngOnInit() {
  }

  onClickMenu(menu) {
    this.choosedMenu = menu;
    this.selectedMenu.emit(menu);
  }

}
