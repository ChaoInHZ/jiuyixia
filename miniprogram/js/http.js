var app = getApp();
var md5 = require('md5.js');
var host = app.globalData.serverUrl;

function post(url, data, dosuccess, doFail) {
  var timestamp = new Date().getTime();
  wx.request({
    url: host + url,
    method: 'POST',
    header: {
      "content-type": "application/json; charset=utf-8",
      "sid": app.globalData.userInfo.sid,
      "version": app.globalData.version,
      "os": app.globalData.os,
      "timestamp": timestamp,
      "sign": md5.hexMD5(timestamp + app.globalData.os + app.globalData.key)
    },
    data: data,
    success: function(res) {
      dosuccess(res.data);
    },
    error: function() {
      doFail();
    }
  })
}

function get(url, dosuccess, doFail) {
  var timestamp = new Date().getTime();
  wx.request({
    url: host + url,
    method: 'GET',
    header: {
      "content-type": "application/json; charset=utf-8",
      "sid": app.globalData.sid,
      "version": app.globalData.version,
      "os": app.globalData.os,
      "timestamp": timestamp,
      "sign": md5.hexMD5(timestamp + app.globalData.os + app.globalData.key)
    },
    success: function(res) {
      dosuccess(res.data);
    },
    error: function() {
      doFail();
    }
  })
}


module.exports.post = post;
module.exports.get = get;