export default [
  {
    path: '/crypto_news',
    name: '实时新闻',
    locale: 'menu.crypto_news',
    attributes: {
      count: "10",
      startId: "1000000000", 
      url: "/cryptonews-api/cryptonews"
    }
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
    attributes: {
      count: "10",
      startId: "0", 
      url: "/cryptonews-api/referenceinfo"
    }
  },
];
