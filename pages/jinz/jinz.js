Page({
    /**
     * 页面的初始数据
     */
    data: {
      inputValue: "",
      activeIndex: 0,
      result: ""
    },
  
    /**
     * 监听文本框输入事件
     */
    onInputChange: function (event) {
      var value = event.detail.value;
      this.setData({
        inputValue: value,
        result: this.convert(value, this.data.activeIndex)
      });
    },
  
    /**
     * 点击“十进制”按钮的点击事件处理函数
     */
    onClickDecimal: function () {
      this.setData({
        activeIndex: 0,
        result: this.convert(this.data.inputValue, 0)
      });
    },
  
    /**
     * 点击“二进制”按钮的点击事件处理函数
     */
    onClickBinary: function () {
      this.setData({
        activeIndex: 1,
        result: this.convert(this.data.inputValue, 1)
      });
    },
  
    /**
     * 点击“八进制”按钮的点击事件处理函数
     */
    onClickOctal: function () {
      this.setData({
        activeIndex: 2,
        result: this.convert(this.data.inputValue, 2)
      });
    },
  
    /**
     * 点击“十六进制”按钮的点击事件处理函数
     */
    onClickHexadecimal: function () {
      this.setData({
        activeIndex: 3,
        result: this.convert(this.data.inputValue, 3)
      });
    },
  
    /**
     * 进制转换函数
     */
    convert: function (value, targetIndex) {
      if (!value) return "";
      var decimal = parseInt(value);
      var binary = decimal.toString(2);
      var octal = decimal.toString(8);
      var hexadecimal = decimal.toString(16).toUpperCase();
      switch (targetIndex) {
        case 0:
          return decimal;
        case 1:
          return binary;
        case 2:
          return octal;
        case 3:
          return hexadecimal;
        default:
          return "";
      }
    }
  })