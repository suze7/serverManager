import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-b',
  templateUrl: './home-b.component.html',
  styleUrls: ['./home-b.component.css']
})
export class HomeBComponent implements OnInit {

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
