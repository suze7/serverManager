import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-g',
  templateUrl: './home-g.component.html',
  styleUrls: ['./home-g.component.css']
})
export class HomeGComponent implements OnInit {

  @Input() set contentType(type) {
    this.type = type;
  }

  @Output() noData = new EventEmitter();

  public type = '图表';

  constructor() { }

  ngOnInit() {
  }

  setNoData(flag: boolean) {
    this.noData.emit(flag);
  }

}
