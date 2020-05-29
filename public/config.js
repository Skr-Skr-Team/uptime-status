// 配置
window.Config = {

  // 站点名
  SiteName: 'Co2oc Status',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm785057549-d41584fccd07431419c3f9da',
    'm785058516-a8e6f3aa60fed54412afebe7',
    'm785065404-b0961c80a4d568ff9faab20e',
    'm784490063-7b5da437e7f1e0d67613714d',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: 'GitHub',
      url: 'https://github.com/Skr-Skr-Team/uptime-status'
    }
  ]
};
