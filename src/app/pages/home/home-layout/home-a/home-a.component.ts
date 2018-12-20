import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-home-a',
  templateUrl: './home-a.component.html',
  styleUrls: ['./home-a.component.less']
})
export class HomeAComponent implements OnInit {
  @Input() set contentType(type) {
    this.type = type;
  }

  @Output() noData = new EventEmitter();

  public type = '图表';

  public chartOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c} ({d}%)'
    },
    legend: {
      bottom: 10,
      left: 'center',
      itemWidth: 6,
      itemHeight: 6,
      icon: 'circle',
      textStyle: {
        color: '#fff',
        padding: [2, 14, 2, 4]
      },
      formatter: function(name) {
        return name;
      },
      data: ['严重告警', '重要告警', '次要告警', '提示告警']
    },
    series: [
      {
        color: ['#ff5c54', '#ff9e54', '#fff954', '#1cefef'],
        name: '告警统计',
        type: 'pie',
        radius: '50%',
        center: ['50%', '40%'],
        clockwise: false,
        startAngle: 0,
        data: [
          {
            value: 10,
            name: '严重告警',
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#ff5c54'
                  },
                  {
                    offset: 1,
                    color: '#ff352b'
                  }
                ],
                globalCoord: false
              }
            }
          },
          {
            value: 0,
            name: '重要告警',
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#ff9e54'
                  },
                  {
                    offset: 1,
                    color: '#ff8529'
                  }
                ],
                globalCoord: false
              }
            }
          },
          { value: 0, name: '次要告警', itemStyle: { color: '#fff954' } },
          { value: 0, name: '提示告警', itemStyle: { color: '#1cefef' } }
        ],
        label: {
          show: false
        },
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  public tableData = [
    { value: 18, name: '严重告警' },
    { value: 6, name: '重要告警' },
    { value: 0, name: '次要告警' },
    { value: 0, name: '提示告警' }
  ];

  constructor() {}

  ngOnInit() {
    this.setChartData();
  }

  setNoData(flag: boolean) {
    this.noData.emit(flag);
  }

  setChartData() {
    const dataList = [
      { value: 18, name: '严重告警' },
      { value: 6, name: '重要告警' },
      { value: 0, name: '次要告警' },
      { value: 0, name: '提示告警' }
    ];
    this.chartOption.series[0].data[0].value = dataList[0].value;
    this.chartOption.series[0].data[1].value = dataList[1].value;
    this.chartOption.series[0].data[2].value = dataList[2].value;
    this.chartOption.series[0].data[3].value = dataList[3].value;
    this.chartOption.legend.formatter = name => {
      const data = dataList.find(v => v.name === name);
      return data.name + ' ' + data.value + '次';
    };
    this.chartOption = _.cloneDeep(this.chartOption);
  }
}
