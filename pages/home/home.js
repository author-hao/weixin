// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    ],
    indicatorDots: true,
    autoplay: true, // 轮播自动播放
    interval: 3000,
    duration: 500,
    indicatorColor: '#fff',
    // 图标
    iconSize: [20],
    iconType: [
      {
        icon: 'success',
        name: 'aa'
      },
      {
        icon: 'success',
        name: 'aa'
      },
      {
        icon: 'success',
        name: 'aa'
      },
      {
        icon: 'success',
        name: 'aa'
      },
      {
        icon: 'success',
        name: 'aa'
      },
      {
        icon: 'success',
        name: 'aa'
      },
      {
        icon: 'success',
        name: 'aa'
      },
      {
        icon: 'success',
        name: 'aa'
      },
      {
        icon: 'success',
        name: 'aa'
      },
      {
        icon: 'success',
        name: 'aa'
      },
      {
        icon: 'success',
        name: 'aa'
      },
      {
        icon: 'success',
        name: 'aa'
      },
      {
        icon: 'success',
        name: 'aa'
      },
      {
        icon: 'success',
        name: 'aa'
      },
      {
        icon: 'success',
        name: 'aa'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: '',
      success: (response) => {
        console.log(response)
      }
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

  }
})