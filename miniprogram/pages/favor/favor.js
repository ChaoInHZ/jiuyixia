// miniprogram/pages/favor/favor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    favorProItems: [{name: "救衣侠定制T恤", img: "/images/product-placeholder.jpg", price: "85.00", oriPrice: "275.00"},{name: "救衣侠定制T恤", img: "/images/product-placeholder.jpg", price: "85.00", oriPrice: "275.00"},{name: "救衣侠定制T恤", img: "/images/product-placeholder.jpg", price: "85.00", oriPrice: "275.00"},{name: "救衣侠定制T恤", img: "/images/product-placeholder.jpg", price: "85.00", oriPrice: "275.00"},{name: "救衣侠定制T恤", img: "/images/product-placeholder.jpg", price: "85.00", oriPrice: "275.00"}],
    startX: 0,
    startY: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.data.favorProItems.forEach(function (item, i) {
      item.isTouchMove = false
    })
    this.setData({
      favorProItems: this.data.favorProItems
    })
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  },
  touchstart: function (e) {
   this.data.favorProItems.forEach(function (item, i) {
      if (item.isTouchMove){
        item.isTouchMove = false;
      }
   })
   this.setData({
    startX: e.changedTouches[0].clientX,
    startY: e.changedTouches[0].clientY,
    favorProItems: this.data.favorProItems
   })
  },
  touchmove: function (e) {
    var that = this,
     index = e.currentTarget.dataset.index,
     startX = that.data.startX,
     startY = that.data.startY,
     touchMoveX = e.changedTouches[0].clientX,
     touchMoveY = e.changedTouches[0].clientY,
     angle = that.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });
     
     that.data.favorProItems.forEach(function (item, i) {
        item.isTouchMove = false;
        if (Math.abs(angle) > 30) 
          return;

        if (i == index) {
          if (touchMoveX > startX) {
            item.isTouchMove = false
          }
          else {
            item.isTouchMove = true
          }
        }
     })
    //更新数据
    that.setData({
      favorProItems: that.data.favorProItems
    })
  },
  angle: function (start, end) {
    var _X = end.X - start.X,
     _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
   },
  delPro: function (e) {
    this.data.favorProItems.splice(e.currentTarget.dataset.index, 1);

    this.setData({
      favorProItems: this.data.favorProItems
    })
  }
})