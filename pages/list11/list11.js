// pades/gn/gn.js
Page({

    handleShowModal() {
        wx.showModal({
          title: '温馨提示', //提示的标题
          content: '小编能想到的功能就只有那么多啦，如果无法满足您的需求请移步到意见反馈提出合理建议，谢谢❛‿˂̵✧', //提示的内容
          success: function(res) {
            if(res.confirm) {
              console.log('用户点击了确定')
            } else if(res.cancel) {
              console.log('用户点击了取消')
            }
          }
        })
      },
      handleShowModal1() {
        wx.showModal({
          title: '温馨提示', //提示的标题
          content: '俺也一样', //提示的内容
          success: function(res) {
            if(res.confirm) {
              console.log('用户点击了确定')
            } else if(res.cancel) {
              console.log('用户点击了取消')
            }
          }
        })
      },
      handleShowModa2() {
        wx.showModal({
          title: '温馨提示', //提示的标题
          content: '我是大哥', //提示的内容
          success: function(res) {
            if(res.confirm) {
              console.log('用户点击了确定')
            } else if(res.cancel) {
              console.log('用户点击了取消')
            }
          }
        })
      },
      handleShowModa3() {
        wx.showModal({
          title: '温馨提示', //提示的标题
          content: '我是二哥', //提示的内容
          success: function(res) {
            if(res.confirm) {
              console.log('用户点击了确定')
            } else if(res.cancel) {
              console.log('用户点击了取消')
            }
          }
        })
      },
      handleShowModal4() {
        wx.showModal({
          title: '温馨提示', //提示的标题
          content: '备！你看见了么，这盛世如你所愿！', //提示的内容
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

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    gotosuiji:function(){
        wx.navigateTo({
          url: '/pages/suiji/suiji',
        })
      },
      gotojinz:function(){
        wx.navigateTo({
          url: '/pages/jinz/jinz',
        })
      },
      goto12:function(){
        wx.navigateTo({
          url: '/pages/list12/list12',
        })
      },
      gotolong:function(){
        wx.navigateTo({
          url: '/pages/long/long',
        })
      },
      electricity:function(){
        wx.navigateTo({
          url: '/pages/ele/ele',
        })
      },
      area:function(){
        wx.navigateTo({
          url: '/pages/area/area',
        })
      },
      space:function(){
        wx.navigateTo({
          url: '/pages/space/space',
        })
      }, 
      time:function(){
        wx.navigateTo({
          url: '/pages/time/time',
        })
      },
      weight:function(){
        wx.navigateTo({
          url: '/pages/weight/weight',
        })
      },
      tongji:function(){
        wx.navigateTo({
          url: '/pages/tongji/tongji',
        })
      },
      BMI:function(){
        wx.navigateTo({
          url: '/pages/BMI/BMI',
        })
      },
      log:function(){
        wx.navigateTo({
          url: '/pages/log/log',
        })
      },
      pow:function(){
        wx.navigateTo({
          url: '/pages/pow/pow',
        })
      },
      A:function(){
        wx.navigateTo({
          url: '/pages/A/A',
        })
      },
      plzh:function(){
        wx.navigateTo({
          url: '/pages/plzh/plzh',
        })
      },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})