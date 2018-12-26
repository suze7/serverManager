import { HomeData } from 'src/app/classlib/home';

export const homeDataList: HomeData[] = [
  {
    id: 1,
    name: '告警统计',
    style: {
      width: '422px'
    },
    menuList: null,
    menuType: '图表',
    noData: false
  },
  {
    id: 2,
    name: '资源类别告警分析 ',
    style: {
      width: '864px'
    },
    menuList: null,
    menuType: '图表',
    noData: false
  },
  {
    id: 3,
    name: '资源类型统计',
    style: null,
    menuList: [{
      name: '图表',
      data: null
    }, {
      name: '移除',
      data: null
    }],
    menuType: '图表',
    noData: false
  },
  {
    id: 4,
    name: '当前告警 ',
    style: null,
    menuList: [{
      name: '列表',
      data: null
    }, {
      name: '移除',
      data: null
    }],
    menuType: '列表',
    noData: false
  },
  {
    id: 5,
    name: '网络设备的CPU利用率TOPN',
    style: null,
    menuList: [{
      name: '图表',
      data: null
    }, {
      name: '移除',
      data: null
    }],
    menuType: '图表',
    noData: true
  },
  {
    id: 6,
    name: '网络设备内存利用率TOPN',
    style: null,
    menuList: [{
      name: '移除',
      data: null
    }],
    menuType: null,
    noData: true
  },
  {
    id: 7,
    name: '服务器CPU利用率TOPN',
    style: null,
    menuList: [{
      name: '图表',
      data: null
    }, {
      name: '列表',
      data: null
    }, {
      name: '移除',
      data: null
    }],
    menuType: '图表',
    noData: false
  },
  {
    id: 8,
    name: '端口流量TOPN',
    style: null,
    menuList: [{
      name: '移除',
      data: null
    }],
    menuType: null,
    noData: true
  },
  {
    id: 9,
    name: '服务器内存利用率TOPN',
    style: null,
    menuList: [{
      name: '图表',
      data: null
    }, {
      name: '列表',
      data: null
    }, {
      name: '移除',
      data: null
    }],
    menuType: '图表',
    noData: false
  },
  {
    id: 10,
    name: '关注的网络设备',
    style: null,
    menuList: [{
      name: '移除',
      data: null
    }],
    menuType: null,
    noData: true
  },
  {
    id: 11,
    name: '端口出流量TOPN',
    style: null,
    menuList: [{
      name: '移除',
      data: null
    }],
    menuType: null,
    noData: true
  },
  {
    id: 12,
    name: '关注的服务器',
    style: null,
    menuList: [{
      name: '移除',
      data: null
    }],
    menuType: null,
    noData: true
  },
  {
    id: 13,
    name: '端口进带宽利用率TOPN',
    style: null,
    menuList: [{
      name: '移除',
      data: null
    }],
    menuType: null,
    noData: true
  },
  {
    id: 14,
    name: '端口进流量TOPN',
    style: null,
    menuList: [{
      name: '移除',
      data: null
    }],
    menuType: null,
    noData: true
  },
  {
    id: 15,
    name: '关注的端口',
    style: null,
    menuList: [{
      name: '移除',
      data: null
    }],
    menuType: null,
    noData: true
  },
  {
    id: 16,
    name: '关注的应用',
    style: null,
    menuList: [{
      name: '移除',
      data: null
    }],
    menuType: null,
    noData: true
  }
];
