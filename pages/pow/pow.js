Page({
    data: {
      base: null,
      exponent: null,
      result: null,
    },
  
    onBaseChange: function (e) {
      this.setData({ base: e.detail.value });
    },
  
    onExponentChange: function (e) {
      this.setData({ exponent: e.detail.value });
    },
  
    onCalculate: function () {
      const base = parseFloat(this.data.base);
      const exponent = parseFloat(this.data.exponent);
      const result = Math.pow(base, exponent).toFixed(3);
      this.setData({ result });
    },
  });