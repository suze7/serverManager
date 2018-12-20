import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-m',
  templateUrl: './home-m.component.html',
  styleUrls: ['./home-m.component.css']
})
export class HomeMComponent implements OnInit {

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
