import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';
@Component({
  selector: 'app-monitor-screen',
  templateUrl: './monitor-screen.component.html',
  styleUrls: ['./monitor-screen.component.less']
})
export class MonitorScreenComponent implements OnInit {
  public time = moment().format('YYYY/MM/DD HH:mm:ss');

  public pieOption1 = {
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c} ({d}%)'
    },
    legend: {
      bottom: '14%',
      left: 'center',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        fontSize: 16,
        color: '#CED5F3',
        padding: [2, 14, 2, 4]
      },
      formatter: function(name) {
        return name;
      },
      data: ['正常', '告警', '严重', '致命', '未知']
    },
    series: [
      {
        color: ['#19BE6B', '#E6DE46', '#FF9900', '#F84540', '#2D8CF0'],
        name: '设备状态统计',
        type: 'pie',
        radius: '40%',
        center: ['50%', '44%'],
        clockwise: true,
        label: {
          formatter: '{b} {d}%',
          fontSize: 16,
          color: '#CED5F3'
        },
        labelLine: {
          length: 10,
          length2: 30
        },
        // startAngle: 0,
        data: [
          { value: 60, name: '正常' },
          { value: 10, name: '告警' },
          { value: 10, name: '严重' },
          { value: 20, name: '致命' },
          { value: 5, name: '未知' }
        ]
      }
    ]
  };

  public pieOption2 = {
    title: {
      left: 'center',
      top: '28%',
      text: '{a|52}\n{b|总数}',
      textStyle: {
        rich: {
          a: {
            fontSize: 40,
            lineHeight: 50,
            color: '#CED5F3',
            align: 'center'
          },
          b: {
            fontSize: 16,
            color: '#CED5F3',
            align: 'center'
          }
        }
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c} ({d}%)'
    },
    legend: {
      bottom: '14%',
      left: 'center',
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 22,
      textStyle: {
        fontSize: 16,
        color: '#CED5F3',
        padding: [0, 10, 0, 0],
        rich: {
          a: {
            fontSize: 16,
            width: 64
          },
          b: {
            fontSize: 16,
            width: 64,
            align: 'right'
          }
        }
      },
      formatter: function(name) {
        return '{a|' + name + '}' + '{b|20%}';
      },
      data: ['致命', '严重', '未知', '警告']
    },
    series: [
      {
        color: ['#F84540', '#FF9900', '#2D8CF0', '#19BE6B'],
        name: '设备状态统计',
        type: 'pie',
        radius: ['29%', '44%'],
        center: ['50%', '37%'],
        clockwise: false,
        label: {
          show: false
        },
        data: [
          { value: 30, name: '致命' },
          { value: 10, name: '严重' },
          { value: 0, name: '未知' },
          { value: 60, name: '警告' }
        ]
      }
    ]
  };

  public tableData = [
    { name: 'CPU警告', address: '192.168.1.1', cpu: 24, memory: 1024 },
    { name: 'CPU警告', address: '192.168.1.1', cpu: 24, memory: 1024 },
    { name: 'CPU警告', address: '192.168.1.1', cpu: 24, memory: 1024 },
    { name: 'CPU警告', address: '192.168.1.1', cpu: 24, memory: 1024 },
    { name: 'CPU警告', address: '192.168.1.1', cpu: 24, memory: 1024 },
    { name: 'CPU警告', address: '192.168.1.1', cpu: 24, memory: 1024 }
  ];

  public tableData2 = [
    {
      name: 'CPU警告',
      content:
        'CPU运行超过85%，，发生次数2次啊实打实的，，发生次数2次啊实打实的',
      address: '192.168.1.1',
      date: '2018-12-12 12.34.56'
    },
    {
      name: 'CPU警告',
      content:
        'CPU运行超过85%，，发生次数2次啊实打实的，，发生次数2次啊实打实的',
      address: '192.168.1.1',
      date: '2018-12-12 12.34.56'
    },
    {
      name: 'CPU警告',
      content:
        'CPU运行超过85%，，发生次数2次啊实打实的，，发生次数2次啊实打实的',
      address: '192.168.1.1',
      date: '2018-12-12 12.34.56'
    },
    {
      name: 'CPU警告',
      content:
        'CPU运行超过85%，，发生次数2次啊实打实的，，发生次数2次啊实打实的',
      address: '192.168.1.1',
      date: '2018-12-12 12.34.56'
    },
    {
      name: 'CPU警告',
      content:
        'CPU运行超过85%，，发生次数2次啊实打实的，，发生次数2次啊实打实的',
      address: '192.168.1.1',
      date: '2018-12-12 12.34.56'
    },
    {
      name: 'CPU警告',
      content:
        'CPU运行超过85%，，发生次数2次啊实打实的，，发生次数2次啊实打实的',
      address: '192.168.1.1',
      date: '2018-12-12 12.34.56'
    }
  ];

  public tableData3 = [
    { name: '交换机', interName: 'G0/1', inFlow: '45MB', outFlow: '50MB' },
    { name: '交换机', interName: 'G0/1', inFlow: '45MB', outFlow: '50MB' },
    { name: '交换机', interName: 'G0/1', inFlow: '45MB', outFlow: '50MB' },
    { name: '交换机', interName: 'G0/1', inFlow: '45MB', outFlow: '50MB' },
    { name: '交换机', interName: 'G0/1', inFlow: '45MB', outFlow: '50MB' },
    { name: '交换机', interName: 'G0/1', inFlow: '45MB', outFlow: '50MB' }
  ];

  constructor() {}

  ngOnInit() {
    this.getTime();
    this.setChartData();
  }

  getTime() {
    setInterval(() => {
      this.time = moment().format('YYYY/MM/DD HH:mm:ss');
    }, 1000);
  }

  setChartData() {
    const dataList = [
      { value: 32, name: '致命' },
      { value: 13, name: '严重' },
      { value: 3, name: '未知' },
      { value: 61, name: '警告' }
    ];
    let sum = 0;
    dataList.forEach(v => {
      sum += v.value;
    });
    this.pieOption2.series[0].data[0].value = dataList[0].value;
    this.pieOption2.series[0].data[1].value = dataList[1].value;
    this.pieOption2.series[0].data[2].value = dataList[2].value;
    this.pieOption2.series[0].data[3].value = dataList[3].value;
    this.pieOption2.legend.formatter = name => {
      const data = dataList.find(v => v.name === name);
      return (
        '{a|' +
        name +
        '}' +
        '{b|' +
        Math.round((data.value * 10000) / sum) / 100 +
        '%}'
      );
    };
    this.pieOption2.title.text = '{a|' + sum + '}\n{b|总数}';
    this.pieOption2 = _.cloneDeep(this.pieOption2);
  }
}
