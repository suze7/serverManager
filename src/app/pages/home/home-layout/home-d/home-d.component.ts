import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-d',
  templateUrl: './home-d.component.html',
  styleUrls: ['./home-d.component.less']
})
export class HomeDComponent implements OnInit {
  @Input() set contentType(type) {
    this.type = type;
  }

  @Output() noData = new EventEmitter();

  public type = '图表';

  public tableCols = [
    // { field: 'level', header: '告警级别' },
    { field: 'name', header: '告警名称' },
    { field: 'original', header: '告警源' },
    { field: 'type', header: '资源类型' },
    { field: 'alarmType', header: '告警类型' },
    { field: 'status', header: '告警状态' },
    // { field: 'date', header: '产生时间' }
  ];

  public tableData = [
    {
      level: 1,
      name: '物理内存使用异常',
      original: '维也纳-测试4维也纳-测试4',
      type: 'CentOS的',
      alarmType: '资源负载检测',
      status: '已确认，未清除',
      date: '2018-10-17 00:44:20'
    },
    {
      level: 2,
      name: '物理内存使用异常',
      original: '维也纳-测试4维也纳-测试4',
      type: 'CentOS的',
      alarmType: '资源负载检测',
      status: '已确认，未清除',
      date: '2018-10-17 00:44:20'
    },
    {
      level: 3,
      name: '物理内存使用异常',
      original: '维也纳-测试4维也纳-测试4',
      type: 'CentOS的',
      alarmType: '资源负载检测',
      status: '已确认，未清除',
      date: '2018-10-17 00:44:20'
    },
    {
      level: 4,
      name: '物理内存使用异常',
      original: '维也纳-测试4维也纳-测试4',
      type: 'CentOS的',
      alarmType: '资源负载检测',
      status: '已确认，未清除',
      date: '2018-10-17 00:44:20'
    },
    {
      level: 1,
      name: '物理内存使用异常',
      original: '维也纳-测试4维也纳-测试4',
      type: 'CentOS的',
      alarmType: '资源负载检测',
      status: '已确认，未清除',
      date: '2018-10-17 00:44:20'
    },
    {
      level: 1,
      name: '物理内存使用异常',
      original: '维也纳-测试4维也纳-测试4',
      type: 'CentOS的',
      alarmType: '资源负载检测',
      status: '已确认，未清除',
      date: '2018-10-17 00:44:20'
    },
    {
      level: 1,
      name: '物理内存使用异常',
      original: '维也纳-测试4维也纳-测试4',
      type: 'CentOS的',
      alarmType: '资源负载检测',
      status: '已确认，未清除',
      date: '2018-10-17 00:44:20'
    },
    {
      level: 1,
      name: '物理内存使用异常',
      original: '维也纳-测试4维也纳-测试4',
      type: 'CentOS的',
      alarmType: '资源负载检测',
      status: '已确认，未清除',
      date: '2018-10-17 00:44:20'
    },
  ];

  constructor() {}

  ngOnInit() {}

  setNoData(flag: boolean) {
    this.noData.emit(flag);
  }
}
