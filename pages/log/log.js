Page({
    data: {
      base: null,
      value: null,
      result: null
    },
    onBaseInput(e) {
      this.setData({
        base: e.detail.value
      });
    },
    onValueInput(e) {
      this.setData({
        value: e.detail.value
      });
    },
    onCalculate() {
      if (this.data.base !== null && this.data.value !== null) {
          let base = this.data.base;
          let value = this.data.value;
          if(base === 'e'){
              base = Math.E;
          }
          if(value === 'e'){
              value = Math.E;
          }
            const result = Math.log(value) / Math.log(base);
            this.setData({
              result: result.toFixed(3)
            });
      }
    }
  });