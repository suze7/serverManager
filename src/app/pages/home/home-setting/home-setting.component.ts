import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-setting',
  templateUrl: './home-setting.component.html',
  styleUrls: ['./home-setting.component.less']
})
export class HomeSettingComponent implements OnInit {

  @Input() unSelectedList = [];
  @Input() selectedList = [];
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter();
  @Output() unSelectedListChange = new EventEmitter();
  @Output() selectedListChange = new EventEmitter();
  @Output() afterSelect = new EventEmitter();
  public dialogSelected = [];
  public dialogUnSelected = [];

  constructor() { }

  ngOnInit() {
  }

  public submitDialog() {
    this.selectedList = this.dialogSelected;
    this.selectedListChange.emit(this.selectedList);
    this.unSelectedList = this.dialogUnSelected;
    this.unSelectedListChange.emit(this.unSelectedList);
    this.afterSelect.emit([this.selectedList, this.unSelectedList]);
    this.closeDialog();
  }

  public closeDialog() {
    this.visible = false;
  }

  public onDialogShow() {
    this.dialogSelected = [...this.selectedList];
    this.dialogUnSelected = [...this.unSelectedList];
  }

  public onDialogHide() {
    this.visibleChange.emit(this.visible);
    this.dialogSelected = [];
    this.dialogUnSelected = [];
  }

}
