Page({
    data: {
      height: 0,
      weight: 0,
      bmi: 0,
      text: ''
    },
  
    // 监听身高输入框变化
    onHeightInput(event) {
      this.setData({ height: parseFloat(event.detail.value) });
    },
  
    // 监听体重输入框变化
    onWeightInput(event) {
      this.setData({ weight: parseFloat(event.detail.value) });
    },
  
    // 点击计算按钮
    onCalculate() {
      const height = this.data.height;
      const weight = this.data.weight;
  
      if (height <= 0 || weight <= 0) {
        wx.showToast({ title: '请输入正确的身高和体重' });
        return;
      }
  
      const bmi = weight / height ** 2;
  
      let text = '';
      if (bmi==2.5) {
        text = '你是只鸡吧!';  
      } 
      else  if (bmi < 18.5) {
        text = '太轻啦！！你是竹竿还是电线杆!赶紧吃吃吃૮꒰ ˶• ༝ •˶꒱ა';
      } else if (bmi < 24) {
        text = '这才是健康的身材嘛！keep on!◕‿◕';
      } 
      else if (bmi==25) {
        text = '你能吃十只鸡吧!';  
      } 
      else if (bmi < 28) {
        text = '太重啦！！快减肥！没在开玩笑( ´◔︎ ‸◔︎`)';  
      } 
     
      
      else {
        text = '家人们谁懂啊！！这里有座山(๑⁼̴̀д⁼̴́๑)';
      }
  
      this.setData({ bmi: bmi.toFixed(2), text });
    }
  })