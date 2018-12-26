import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-b',
  templateUrl: './home-b.component.html',
  styleUrls: ['./home-b.component.less']
})
export class HomeBComponent implements OnInit {
  @Input() set contentType(type) {
    this.type = type;
  }

  @Output() noData = new EventEmitter();

  public type = '图表';

  public chartOption = {
    color: ['#ff5252', '#ff9e54', '#fff954', '#1cefef'],
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['严重告警', '重要告警', '次要告警', '提示告警'],
      align: 'left',
      top: 16,
      right: 17,
      itemWidth: 6,
      itemHeight: 6,
      itemGap: 32,
      textStyle: {
        color: '#fff',
        padding: [0, 0, 0, 2]
      }
    },
    xAxis: {
      data: [
        '网络设备',
        '服务器',
        '数据库',
        '应用服务器',
        'web服务器',
        '邮件服务器',
        '中间件',
        '存储设备',
        '光纤交换机',
        '虚拟化',
        '通用监控',
        '业务资源'
      ],
      axisLine: {
        lineStyle: {
          color: '#8190b8'
        }
      },
      axisLabel: {
        interval: 0,
        color: 'rgba(255,255,255,0.6)',
        formatter: data => {
          const array = data.split('');
          let index = Math.floor(array.length / 2);
          if (index < 2) {
            index = 2;
          }
          array.splice(index, 0, '\n');
          return array.join('');
        },
        lineHeight: 14,
        rich: {}
      },
      axisTick: {
        show: false
      }
    },
    yAxis: {
      minInterval: 5,
      axisLabel: {
        formatter: '{value}次',
        color: 'rgba(255,255,255,0.6)'
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: '#8190b8',
          opacity: 0.3
        }
      }
    },
    grid: {
      top: 68,
      right: 25,
      bottom: 51,
      left: 60
    },
    series: [
      {
        name: '严重告警',
        type: 'bar',
        stack: 'one',
        data: [15, 7, 8, 2, 3, 6, 13, 8, 3, 17, 9, 14],
        barCategoryGap: '75%'
      },
      {
        name: '重要告警',
        type: 'bar',
        stack: 'one',
        data: [3]
      },
      {
        name: '次要告警',
        type: 'bar',
        stack: 'one',
        data: []
      },
      {
        name: '提示告警',
        type: 'bar',
        stack: 'one',
        data: []
      }
    ]
  };

  public tableCols = [
    { field: 'name', header: '资源类别' },
    { field: 'alarm1', header: '严重告警' },
    { field: 'alarm2', header: '重要告警' },
    { field: 'alarm3', header: '次要告警' },
    { field: 'alarm4', header: '提示告警' }
  ];

  public tableData = [
    {
      name: '网络设备',
      alarm1: 2,
      alarm2: 3,
      alarm3: 4,
      alarm4: 1
    },
    {
      name: '服务器',
      alarm1: 2,
      alarm2: 3,
      alarm3: 4,
      alarm4: 1
    },
    {
      name: '数据库',
      alarm1: 2,
      alarm2: 3,
      alarm3: 4,
      alarm4: 1
    },
    {
      name: '应用服务器',
      alarm1: 2,
      alarm2: 3,
      alarm3: 4,
      alarm4: 1
    },
    {
      name: 'web服务器',
      alarm1: 2,
      alarm2: 3,
      alarm3: 4,
      alarm4: 1
    },
    {
      name: '邮件服务器',
      alarm1: 2,
      alarm2: 3,
      alarm3: 4,
      alarm4: 1
    },
    {
      name: '中间件',
      alarm1: 2,
      alarm2: 3,
      alarm3: 4,
      alarm4: 1
    },
    {
      name: '存储设备',
      alarm1: 2,
      alarm2: 3,
      alarm3: 4,
      alarm4: 1
    },
    {
      name: '光纤交换机',
      alarm1: 2,
      alarm2: 3,
      alarm3: 4,
      alarm4: 1
    },
    {
      name: '虚拟化',
      alarm1: 2,
      alarm2: 3,
      alarm3: 4,
      alarm4: 1
    },
    {
      name: '通用监控',
      alarm1: 2,
      alarm2: 3,
      alarm3: 4,
      alarm4: 1
    },
    {
      name: '业务资源',
      alarm1: 2,
      alarm2: 3,
      alarm3: 4,
      alarm4: 1
    }
  ];

  constructor() {}

  ngOnInit() {}

  setNoData(flag: boolean) {
    this.noData.emit(flag);
  }
}
