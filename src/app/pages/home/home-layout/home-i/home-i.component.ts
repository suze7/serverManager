import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-i',
  templateUrl: './home-i.component.html',
  styleUrls: ['./home-i.component.less']
})
export class HomeIComponent implements OnInit {

  @Input() set contentType(type) {
    this.type = type;
  }

  @Output() noData = new EventEmitter();

  public type = '图表';
  public chartOption = {
    tooltip: {
      trigger: 'axis',
      formatter: '{b}: {c}%'
    },
    xAxis: {
      data: [
        'test',
        'WEB服务器',
        '维也纳-测试4'
      ],
      axisLine: {
        lineStyle: {
          color: '#8190b8'
        }
      },
      axisLabel: {
        interval: 0,
        color: 'rgba(255,255,255,0.6)',
        lineHeight: 14
      },
      axisTick: {
        show: false
      }
    },
    yAxis: {
      max: 100,
      min: 0,
      splitNumber: 5,
      axisLabel: {
        color: 'rgba(255,255,255,0.6)',
        formatter: data => {
          return data + '%';
        }
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
      top: 40,
      right: 24,
      bottom: 40,
      left: 60
    },
    series: [
      {
        name: '',
        type: 'bar',
        itemStyle: {
          barBorderRadius: 500,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#ffd754'
              },
              {
                offset: 1,
                color: '#bc9d54'
              }
            ],
            globalCoord: false
          }
        },
        data: [97, 64, 42],
        barWidth: 16,
        barCategoryGap: '75%'
      }
    ]
  };

  public tableData = [
    {
      name: '维也纳',
      type: 'CentOS的',
      address: '123.207.153.163',
      status1: 0,
      status2: 1,
      accross: 98.11
    },
    {
      name: 'WEB服务器',
      type: 'CentOS的',
      address: '123.207.153.163',
      status1: 0,
      status2: 1,
      accross: 95.11
    },
    {
      name: '维也纳',
      type: 'CentOS的',
      address: '123.207.153.163',
      status1: 0,
      status2: 1,
      accross: 0
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  setNoData(flag: boolean) {
    this.noData.emit(flag);
  }

}
