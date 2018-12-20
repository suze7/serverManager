import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.less']
})
export class HomeLayoutComponent implements OnInit {

  @Input() homeData = null;

  constructor() { }

  ngOnInit() {
  }

}
