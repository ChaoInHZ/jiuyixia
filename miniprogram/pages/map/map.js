// miniprogram/pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: "/images/location-map.svg",
      id: 0,
      latitude: 30.26438616263722,
      longitude: 120.17184123779299,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 120.17184123779299,
        latitude: 30.26438616263722
      }, {
        longitude: 120.17184123779299,
        latitude: 30.26438616263722
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    myLatitude: 0.0,
    myLongitude: 0.0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this;
    // qqmapsdk = new QQMapWX({
    //   key: 'your key'
    // });
    // wx.getLocation({
    //   type: 'gcj02',
    //   success: function (res) {
    //     console.log(res);
    //     that.setData({
    //       myLatitude: res.latitude,
    //       myLongitude: res.longitude,
    //     });
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.getLngLat();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
  // ,
  // regionchange(e) {
  //   if (e.type == 'end') {
  //     this.getLngLat()
  //   } else { //begin
  //   }
  // },
  // getLngLat: function () {
  //   var that = this;
  //   this.mapCtx = wx.createMapContext("map");
  //   this.mapCtx.getCenterLocation({
  //     success: function (res) {
  //       that.setData({
  //         markers: [{
  //           id: 0,
  //           iconPath: "/images/location.svg",
  //           longitude: res.longitude,
  //           latitude: res.latitude,
  //           width: 40,
  //           height: 40
  //         }]
  //       })
  //       that.getPoiList(res.longitude, res.latitude)
  //     }
  //   })
  // },
  // getPoiList: function (longitude, latitude) {
  //   var that = this
  //   // 调用接口
  //   qqmapsdk.reverseGeocoder({
  //     location: {
  //       latitude: latitude,
  //       longitude: longitude,
  //     },
  //     get_poi: 1,
  //     poi_options: 'policy=2;radius=3000;page_size=20;page_index=1',
  //     success: function (res) {
  //       that.setData({
  //         addressList: res.result.pois
  //       })
  //     },
  //     fail: function (res) {
  //       console.log(res);
  //     },
  //     complete: function (res) {
  //       console.log(res);
  //     }
  //   });
  // },

  // clickItem: function (e) {
  //   let pages = getCurrentPages();
  //   let prevPage = pages[pages.length - 2];
  //   prevPage.setData({
  //     address: e.currentTarget.dataset.address,
  //   })
  //   wx.navigateBack({
  //     delta: 1,
  //   })
  // }
})