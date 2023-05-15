Page({
    data: {
      number: 0, // 输入整数
      result: "", // 阶乘计算结果
    },
    
    onInput(e) {
      this.setData({
        number: parseInt(e.detail.value),
      })
    },
    
    onCalculate() {
      const n = this.data.number;
      const res = this.factorial(n);
      this.setData({
        result: res,
      })
    },
    
    factorial(n) {
      if (n === 0 || n === 1) {
        return 1;
      }
      return n * this.factorial(n - 1);
    },
  })