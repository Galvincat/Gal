// 逻辑部分
Page({
    data: {
      n: null,
      m: null,
      combination: "",
      permutation: "",
    },
  
    onInputN(e) {
      this.setData({
        n: parseInt(e.detail.value, 10),
      });
    },
  
    onInputM(e) {
      this.setData({
        m: parseInt(e.detail.value, 10),
      });
    },
  
    onCalculate() {
      const { n, m } = this.data;
      let combination = null;
      let permutation = null;
      if (n !== null && m !== null && m <= n) {
        combination = this.combination(n, m);
        permutation = this.permutation(n, m);
      }
      this.setData({
        combination,
        permutation,
      });
    },
  
    combination(n, m) {
      const a = this.factorial(n);
      const b = this.factorial(m);
      const c = this.factorial(n - m);
      return a / (b * c);
    },
  
    permutation(n, m) {
      const a = this.factorial(n);
      const b = this.factorial(n - m);
      return a / b;
    },
  
    factorial(n) {
      let result = 1;
      for (let i = 1; i <= n; i++) {
        result *= i;
      }
      return result;
    }
  });