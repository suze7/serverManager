import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-i',
  templateUrl: './home-i.component.html',
  styleUrls: ['./home-i.component.css']
})
export class HomeIComponent implements OnInit {

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
