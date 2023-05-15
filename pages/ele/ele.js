Page({
    data: {
      currentTab: 0,
      inputUnit: 'uA',
      inputUnitOptions: ['uA', 'mA', 'A'],
      outputUnit: 'uA',
      outputUnitOptions: ['uA', 'mA', 'A'],
      inputValue  : '',
      outputValue: ''
    },
  
    // 切换电流/电压/电阻
    clickCurrentTab: function () {
      this.setData({
        currentTab: 0,
        inputUnit: 'uA',
        inputUnitOptions: ['uA', 'mA', 'A'],
        outputUnit: 'uA',
        outputUnitOptions: ['uA', 'mA', 'A']
      });
    },
    clickVoltageTab: function () {
      this.setData({
        currentTab: 1,
        inputUnit: 'v',
        inputUnitOptions: ['mv', 'v', 'kv'],
        outputUnit: 'v',
        outputUnitOptions: ['mv', 'v', 'kv']
      });
    },
    clickResistanceTab: function () {
      this.setData({
        currentTab: 2,
        inputUnit: 'mΩ',
        inputUnitOptions: ['mΩ', 'Ω', 'kΩ'],
        outputUnit: 'mΩ',
        outputUnitOptions: ['mΩ', 'Ω', 'kΩ']
      });
    },
  
    // 输入框输入数值
    onInput: function (event) {
      this.setData({
        inputValue: event.detail.value
      });
      this.convertValue();
    },
  
    // 显示输入单位选择框
    showInputUnitPicker: function () {
      this.setData({
        inputUnitPickerHidden: false
      });
    },
  
    // 输入单位选择变化
    onInputUnitChange: function (event) {
      this.setData({
        inputUnit: this.data.inputUnitOptions[event.detail.value]
      });
      this.convertValue();
    },
  
    // 显示输出单位选择框
    showOutputUnitPicker: function () {
      this.setData({
        outputUnitPickerHidden: false
      });
    },
  
    // 输出单位选择变化
    onOutputUnitChange: function (event) {
      this.setData({
        outputUnit: this.data.outputUnitOptions[event.detail.value]
      });
      this.convertValue();
    },
  
    // 计算数值转换结果
    convertValue: function () {
      let inputValue = parseFloat(this.data.inputValue);
      let inputUnit = this.data.inputUnit;
      let outputUnit = this.data.outputUnit;
      let outputValue = '';
  
      if (!isNaN(inputValue)) {
        // 计算转换结果
        switch (inputUnit) {
          case 'uA':
            switch (outputUnit) {
              case 'uA':
                outputValue = inputValue;
                break;
              case 'mA':
                outputValue = inputValue / 1000;
                break;
              case 'A':
                outputValue = inputValue / 1000000;
                break;
            }
            break;
          case 'mA':
            switch (outputUnit) {
              case 'uA':
                outputValue = inputValue * 1000;
                break;
              case 'mA':
                outputValue = inputValue;
                break;
              case 'A':
                outputValue = inputValue / 1000;
                break;
            }
            break;
          case 'A':
            switch (outputUnit) {
              case 'uA':
                outputValue = inputValue * 1000000;
                break;
              case 'mA':
                outputValue = inputValue * 1000;
                break;
              case 'A':
                outputValue = inputValue;
                break;
            }
            break;
          case 'mv':
            switch (outputUnit) {
              case 'mv':
                outputValue = inputValue;
                break;
              case 'v':
                outputValue = inputValue / 1000;
            break;
          case 'kv':
            outputValue = inputValue / 1000000;
            break;
        }
        break;
      case 'v':
        switch (outputUnit) {
          case 'mv':
            outputValue = inputValue * 1000;
            break;
          case 'v':
            outputValue = inputValue;
            break;
          case 'kv':
            outputValue = inputValue / 1000;
            break;
        }
        break;
      case 'kv':
        switch (outputUnit) {
          case 'mv':
            outputValue = inputValue * 1000000;
            break;
          case 'v':
            outputValue = inputValue * 1000;
            break;
          case 'kv':
            outputValue = inputValue;
            break;
        }
        break;
      case 'mΩ':
        switch (outputUnit) {
          case 'mΩ':
            outputValue = inputValue;
            break;
          case 'Ω':
            outputValue = inputValue / 1000;
            break;
          case 'kΩ':
            outputValue = inputValue / 1000000;
            break;
        }
        break;
      case 'Ω':
        switch (outputUnit) {
          case 'mΩ':
            outputValue = inputValue * 1000;
            break;
          case 'Ω':
            outputValue = inputValue;
            break;
          case 'kΩ':
            outputValue = inputValue / 1000;
            break;
        }
        break;
      case 'kΩ':
        switch (outputUnit) {
          case 'mΩ':
            outputValue = inputValue * 1000000;
            break;
          case 'Ω':
            outputValue = inputValue * 1000;
            break;
          case 'kΩ':
            outputValue = inputValue;
            break;
        }
        break;
    }
  
    // 显示转换结果
    this.setData({
      outputValue: outputValue.toFixed(6)
    });
  }
  },
  
  // 隐藏输入单位选择框
  hideInputUnitPicker: function () {
  this.setData({
  inputUnitPickerHidden: true
  });
  },
  
  // 隐藏输出单位选择框
  hideOutputUnitPicker: function () {
  this.setData({
  outputUnitPickerHidden: true
  });
  }
  })