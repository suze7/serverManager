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
  public chartOption = {
    xAxis: {
      data: [
        'windows',
        'Linux',
        'CentOS',
        'Tomcat',
        'Apache',
        'IP检测',
        'MySQL',
        'FTP'
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
      boundaryGap: ['0%', '20%'],
      axisLabel: {
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
      top: 40,
      right: 24,
      bottom: 40,
      left: 47
    },
    series: [
      {
        name: '资源类型统计 ',
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
                color: '#1cefef'
              },
              {
                offset: 1,
                color: '#14abab'
              }
            ],
            globalCoord: false
          }
        },
        data: [4, 3, 7, 3, 3, 5, 7, 1],
        barCategoryGap: '75%'
      }
    ]
  };
  constructor() {}

  ngOnInit() {}

  setNoData(flag: boolean) {
    this.noData.emit(flag);
  }
}
