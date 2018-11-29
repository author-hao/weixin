//登录页

Page({
  data: {
    userName: '', // 获取用户姓名值
    userNum: '', // 获取用户手机号 
    userPwd: '', // 获取用户密码
    Border: '', // 姓名获取焦点显示下边框
    Num: '', // 手机号获取焦点显示下边框
    Pwd: '', //  密码获取焦点显示下边框
    logs: '' // 提示
  },
  onfocusName: function (e) { // 姓名框获取焦点
    this.setData({
      Border: 'border-bottom:1px solid #c82d1e'
    })
  },
  onblurName: function (e) { // 姓名框失去焦点
    let name = e.detail.value // 获取姓名的值
    
    this.setData({
      Border: 'border-bottom:1px solid #eee'
    })
  },
  onfocusNum: function () { // 手机号获取焦点
    this.setData({
      Num: 'border-bottom:1px solid #c82d1e'
    })
  },
  onblurNum: function (e) { // 手机号失去焦点
    let number = e.detail.value
    this.setData({
      Num: 'border-bottom:1px solid #eee'
    })
  },
  onfocusPwd: function () { // 密码获取焦点
    this.setData({
      Pwd: 'border-bottom:1px solid #c82d1e'
    })
  },
  onblurPwd: function (e) { // 密码失去焦点
    let pass = e.detail.value
    this.setData({
      Pwd: 'border-bottom:1px solid #eee'
    })
  },
  onlogin: function () { // 登录按钮操作
    this.setData({
      logs:'错误'
    })
    wx.redirectTo({ // 路由跳转
      url: '../home/home'
    })
  }
})
