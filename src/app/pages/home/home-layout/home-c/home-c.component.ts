import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-c',
  templateUrl: './home-c.component.html',
  styleUrls: ['./home-c.component.css']
})
export class HomeCComponent implements OnInit {

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
