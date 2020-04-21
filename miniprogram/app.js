//app.js
App({
  onLaunch: function () {

    // 建立socket链接
    wx.connectSocket({
      url: 'wss://api.jiuyixia.tanlingling.com/ws',
    });
    // 链接建立成功后持续发送心跳，每隔3s
    wx.onSocketOpen((result) => {
      var heartBeat = {};
      // 当前登录者手机号码
      heartBeat.from = "15658018888"; // ★★★★★ 需要测试接收消息的话把这里的 from 和 发消息的 to 调换位置即可, 即 from = 13067818082 ★★★★★
      // 心跳 type=1
      heartBeat.type = 1;
      // 发送心跳
      setInterval(() => {
        wx.sendSocketMessage({
          data: JSON.stringify(heartBeat),
        })
      }, 3000);
    });

    // 接收到服务器发来的消息
    wx.onSocketMessage((result) => {
      var message = JSON.parse(result.data);
      if (message.type == 20) {
        // 服务器接收到本地发出的消息, 然后回复本地
        console.log("模拟发送消息成功，取消等待标志: " + JSON.stringify(message))
      } else {
        // 真实需处理的消息，2：文本|3：图片|4：商品图文|...
        console.log("接收到真实用户消息: " + JSON.stringify(message));
        // TODO 添加消息到聊天列表缓存
        // TODO 添加消息到聊天记录缓存

        // 回复服务器接收消息成功，避免服务器重发消息
        var reply = {};
        reply.id = message.id;
        reply.from = message.from;
        reply.to = message.to;
        reply.type = 10;
        wx.sendSocketMessage({
          data: JSON.stringify(reply),
        })
      }
    });

    // 模拟5秒钟后发送消息
    setTimeout(() => {
      var obj = {};
      obj.name = "张三";
      obj.avatar = "";
      obj.from = "15658018888";
      obj.to = "13067818082";
      obj.id = obj.from + new Date().getTime();
      obj.type = 2;
      obj.msg = "模拟消息";
      var str = JSON.stringify(obj);
      console.log("发送模拟消息: " + str);
      wx.sendSocketMessage({
        data: str
      });
    }, 5000);
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }

    
    this.globalData = {
      userInfo: {
        uuid: "",
        openId: "",
        telephone: ""
      },
      serverUrl: "https://api.jiuyixia.tanlingling.com"
    }
  }
})
