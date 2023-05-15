//index.js
Page({
    data: {
      start: '',
      end: '',
      count: '',
      randomNumbers: null,
    },
  
    handleStartInput: function (e) {
      this.setData({
        start: e.detail.value,
      });
    },
  
    handleEndInput: function (e) {
      this.setData({
        end: e.detail.value,
      });
    },
  
    handleCountInput: function (e) {
      this.setData({
        count: e.detail.value,
      });
    },
  
    generateRandomNumbers: function () {
      const { start, end, count } = this.data;
      const numbers = [];
  
      // 检查输入是否为空
      if (!start || !end || !count) {
        wx.showToast({
          title: '请输入范围和个数',
          icon: 'none',
        });
        return;
      }
  
      // 解析起始值和终值
      const minValue = Number(start);
      const maxValue = Number(end);
  
      // 检查输入是否有效
      if (isNaN(minValue) || isNaN(maxValue)) {
        wx.showToast({
          title: '请输入有效的数值',
          icon: 'none',
        });
        return;
      }
  
      // 生成随机数
      for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
        numbers.push(randomNumber);
      }
  
      this.setData({
        randomNumbers: numbers,
      });
    },
  });