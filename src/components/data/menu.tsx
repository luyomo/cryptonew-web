export default [
  {
    path: '/home',
    name: '首页',
    locale: 'menu.home',
    children: [
      {
        path: '/home/overview',
        name: '概述',
        hideInMenu: true,
        locale: 'menu.home.overview',
      },
      {
        path: '/home/search',
        name: '搜索',
        hideInMenu: true,
        locale: 'menu.home.search',
      },
    ],
  },
  {
    path: '/crypto_news',
    name: '实时新闻',
    locale: 'menu.crypto_news',
  },
  {
    path: '/bian_info',
    name: '币安账户',
    locale: 'menu.bian_info',
    children: [
      {
        path: '/bian_info/balance',
        name: '账户信息',
        locale: 'menu.bian_info.accounting',
      },
      {
        path: '/bian_info/setting',
        name: '推送设定',
        locale: 'menu.bian_info.setting',
      },
    ],
  },
  {
    path: '/other',
    name: '参考信息',
    locale: 'menu.other',
  },
];
