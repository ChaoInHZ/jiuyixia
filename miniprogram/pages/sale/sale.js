// miniprogram/pages/sale/sale.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      publishType: 'sale',
      files: [],
      price: "",
      oriPrice: "",
      sizeArr: [["160-165", "165-170", "170-175", "175-180"],["M", "L", "XL", "XXL"]],
      sizeIndex: [-1,-1],
      sexArr: ["请选择","男", "女"],
      sexIndex: 0,
      autoCut: false,
      agreeChecked: true,
      expressFee:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      publishType: options.type
    })
    console.log(this.data.publishType)
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
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, 
      urls: this.data.files
    })
  },
  priceFormat: function (e) {
    var val = isNaN(parseFloat(e.detail.value)) ? '' : parseFloat(e.detail.value).toFixed(2);
    this.setData({
      price: val
    })
  },
  oriPriceFormat: function (e) {
    var val = isNaN(parseFloat(e.detail.value)) ? '' : parseFloat(e.detail.value).toFixed(2);
    this.setData({
      oriPrice: val
    })
  },
  expressFeeFormat: function (e) {
    var val = isNaN(parseFloat(e.detail.value)) ? '' : parseFloat(e.detail.value).toFixed(2);
    this.setData({
      expressFee: val
    })
  },
  bindSizePickerChange: function (e) {
    this.setData({
      sizeIndex: e.detail.value
    })
  },
  bindSexPickerChange: function (e) {
    this.setData({
      sexIndex: e.detail.value
    })
  },
  onAutoCutChange: function (e) {
    this.setData({
      autoCut: !this.data.autoCut
    })
  },
  onAgreeCheckedChange: function (e) {
    this.setData({
      agreeChecked: !this.data.agreeChecked
    })
  },
  submitPublish: function (){

  }
})