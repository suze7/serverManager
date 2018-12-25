import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-progressbar',
  templateUrl: './my-progressbar.component.html',
  styleUrls: ['./my-progressbar.component.less']
})
export class MyProgressbarComponent implements OnInit {

  @Input() set percent(data) {
    this.accrossStyle.width = data + '%';
  }

  @Input() set background(color) {
    this.accrossStyle.background = color;
  }

  public accrossStyle = {
    width: '0%',
    background: '#69f0ae'
  };

  constructor() { }

  ngOnInit() {
  }

}
