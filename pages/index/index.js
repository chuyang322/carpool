// pages/index/index.js
const app = getApp();
var amapFile = require('/libs/amap-wx.js');
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  showOrderInfo: false,
  data: {
    date: "",
    time: "",
    longitude: 116.40,
    latitude: 39.90,
    scale: 16,
    location: "在哪上车？",
    destination: "你到哪去？",
    markers: [{}]
  },
  //跳转司机模式
  toDriverMode: function() {
    wx.navigateTo({
      url: '/pages/index/driver/driver',
    })
  },

  //定位
  getPosition: function() {
    var that = this;
    wx.getLocation({
      success: function(res) {
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude,
          scale: 16
        })
      },
      fail: function(info) {

      }
    });
  },
  //选择出发位置
  choosePosition: function() {
    var that = this;
    wx.chooseLocation({
      success: function(res) {
        if (res.name != "") {
          that.setData({
            location: res.name,
            markers: [{
              id: 0,
              longitude: res.longitude,
              latitude: res.latitude
            }]
          });
        }
      },
      fail: function(info) {

      },
      complete: function() {

      }
    })
  },
  //选择目的地
  chooseDestination: function() {
    var that = this;
    wx.chooseLocation({
      success: function(res) {
        if (res.name != "") {
          that.setData({
            destination: res.name,
            markers: [{
              id: 1,
              longitude: res.longitude,
              latitude: res.latitude
            }],
            showOrderInfo: true,
          });
          wx.hideTabBar();
        }
      },
      fail: function(info) {

      },
      complete: function() {

      }
    });
  },
  //
  preventTouchMove: function() {

  },
  //
  findDriver: function() {
    wx.navigateTo({
      url: "./findDriver/finddriver",
    })
  },
  //
  chooseOrderData:function(e){
    this.setData({
      date:e.detail.value,
    })
  },
  //
  chooseOrderTime: function (e) {
    this.setData({
      time: e.detail.value,
    })
  },
  //
  orderCancel:function(){
    this.setData({
      showOrderInfo:false
    });
    wx.showTabBar();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var amapFun = new amapFile.AMapWX({
      key: '611cf6eb9289a026c8a745a0b7775503'
    });
    wx.getLocation({
      type: 'gcj02',
      success: function(res) {
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      },
      fail: function(info) {

      }
    });
    amapFun.getRegeo({
      success: function(data) {
        that.setData({
          location: data[0].name
        })
      },
      fail: function(info) {
        console.log(info);
      }
    });
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