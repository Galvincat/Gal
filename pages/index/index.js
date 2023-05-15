Page({

    handleShowModalll() {
        wx.showModal({
          title: '温馨提示', //提示的标题
          content: '这个功能的大环境还没成熟，就先不做了，你要是想体验的话，请移步到意见反馈的人工客服，我会给你提供无偿服务', //提示的内容
          success: function(res) {
            if(res.confirm) {
              console.log('用户点击了确定')
            } else if(res.cancel) {
              console.log('用户点击了取消')
            }
          }
        })
      },
    /**
     * 页面的初始数据
     */
    data: {
  
    },
  goto:function(){
    wx.navigateTo({
      url: '/pages/list/list',
    })
  },
  goto1:function(){
    wx.navigateTo({
      url: '/pages/list11/list11',
    })
  },
  gotoai:function(){
    wx.navigateTo({
      url: '/pages/ai/ai',
    })
  },
  gotolunt:function(){
    wx.navigateTo({
      url: '/pages/lunt/lunt',
    })
  },
  gotomy:function(){
    wx.navigateTo({
      url: '/pages/my/my',
    })
  },
})