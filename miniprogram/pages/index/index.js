//index.js
const app = getApp()

Page({
  data: {
    activeBanner: 'banner1',
    pickerRange: ['24h自动降','捐赠','男装','女装','童装','鞋子','配饰'],
    pickerIndex: 0,
    sortingArr: ['综合','距离','最新上架','价格'],
    sortingIndex: 0,
    productNum: 6
  },

  onLoad: function() {

  },
  onShareAppMessage: function () {

  },
  scrollBanner: function(){
    var index = parseInt(this.data.activeBanner.substr(6));
    console.log("index" + index);
    index = (index == 3) ? 1 : index + 1;
    console.log("new" + index);
    this.setData({
      activeBanner: 'banner' + index
    })
  },
  switchSorting: function(e){
    this.setData({
      sortingIndex: e.target.dataset.val
    })
  },
  bindPickerChange: function(e){
    this.setData({
      pickerIndex: e.detail.value
    })
  }


})
