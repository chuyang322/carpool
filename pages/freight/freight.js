// pages/freight/freight.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showOrderInfo: 0,
    currentTab: 0,
    goodsList: [{
      type: "普通货物",
      startPosition: "宜宾",
      endPosition: "成都",
      date: "2019-11-11",
      weight: "5吨",
    }, {
      type: "普通货物",
      startPosition: "宜宾",
      endPosition: "成都",
      date: "2019-11-11",
      weight: "6吨",
    }],
    truckList: [{
      fanwei: "全国",
      weight: "15吨",
      date: "2019-11-11",
    }, {
      fanwei: "全国",
      weight: "20吨",
      date: "2019-11-11"
    }]
  },
  switchTopTab: function(e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
    console.log(that.data.currentTab);
  },
  //
  preventTouchMove: function() {},
  //
  faqidingdan: function() {
    var that = this;
    that.setData({
      showOrderInfo: 1,
    });
    wx.hideTabBar();
  },
  //
  orderCancel: function() {
    this.setData({
      showOrderInfo: false
    });
    wx.showTabBar();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var data = util.formatTime2(new Date());
    var time = util.formatTime3(new Date());
    that.setData({
      date: data,
      time: time,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})