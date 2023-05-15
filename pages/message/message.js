
// pages/me/me.js
const app=getApp()
Page({

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
    login(){
        var that = this;
        wx.getUserProfile({
          desc: '用于信息完善',
          success(res){
              console.log(res.userInfo)
              var user = res.userInfo
              that.setData({
                  userInfo: user
              })
              //java 云开发数据库
              //检查，此账户是否已经授权登录

              wx.cloud.database().collection('Message').add({
                  data:{
                    avatarUrl : user.avatarUrl,
                    nickName : user.nickName
                },
               success (res){
                    console.log(res)
                    wx.showToast({
                      title: '登录成功',
                    })
                }
              })
          }
        })
    }
})
