Page({
    data: {
      inputUnitIndex: 3,
      outputUnitIndex: 6,
      unitOptions: ["皮米", "纳米", "微米", "毫米", "厘米", "分米", "米", "千米", "海里", "英里"],
      inputUnit: "毫米",
      outputUnit: "米",
      inputValue: "",
      outputValue: ""
    },
  
    onInputChange: function(e) {
      const inputValue = e.detail.value;
      const inputUnitIndex = this.data.inputUnitIndex;
      const outputUnitIndex = this.data.outputUnitIndex;
      const outputValue = this.convertLength(inputValue, inputUnitIndex, outputUnitIndex);
      this.setData({
        inputValue: inputValue,
        outputValue: outputValue
      });
    },
  
    onInputUnitChange: function(e) {
      const inputUnitIndex = e.detail.value;
      const inputUnit = this.data.unitOptions[inputUnitIndex];
      this.setData({
        inputUnitIndex: inputUnitIndex,
        inputUnit: inputUnit
      });
      const inputValue = this.data.inputValue;
      const outputUnitIndex = this.data.outputUnitIndex;
      const outputValue = this.convertLength(inputValue, inputUnitIndex, outputUnitIndex);
      this.setData({
        outputValue: outputValue
      });
    },
  
    onOutputUnitChange: function(e) {
      const outputUnitIndex = e.detail.value;
      const outputUnit = this.data.unitOptions[outputUnitIndex];
      this.setData({
  outputUnitIndex: outputUnitIndex,
  outputUnit: outputUnit
  });
  const inputValue = this.data.inputValue;
  const inputUnitIndex = this.data.inputUnitIndex;
  const outputValue = this.convertLength(inputValue, inputUnitIndex, outputUnitIndex);
  this.setData({
  outputValue: outputValue
  });
  },
  
  convertLength: function(value, fromIndex, toIndex) {
  const units = [
  1e-12, // 皮米
  1e-9, // 纳米
  1e-6, // 微米
  0.001, // 毫米
  0.01, // 厘米
  0.1, // 分米
  1, // 米
  1000, // 千米
  1852, // 海里
  1609.344 // 英里
  ];
  const fromUnit = units[fromIndex];
  const toUnit = units[toIndex];
  return (value * fromUnit) / toUnit;
  }
  });