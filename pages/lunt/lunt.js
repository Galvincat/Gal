// pages/list1/list1.js
Page({
    handleShowModal() {
        wx.showModal({
          title: '温馨提示', //提示的标题
          content: '此功能尚未完善，感谢你的支持', //提示的内容
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
        count:0
    },
    b(){
       this.setData({
           count:this.data.count+1
       })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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