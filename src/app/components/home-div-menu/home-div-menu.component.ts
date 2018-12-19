import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-div-menu',
  templateUrl: './home-div-menu.component.html',
  styleUrls: ['./home-div-menu.component.less']
})
export class HomeDivMenuComponent implements OnInit {

  @Input() menuName = '';

  constructor() { }

  ngOnInit() {
  }

}
