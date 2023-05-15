Page({
    data: {
      unitList: ['微秒us', '毫秒ms', '秒s', '分钟min', '刻钟qu', '小时h', '时辰dh','天day','周week','年yr','坤年ky' ],
      inputUnit: '秒s',
      inputValue: '',
      outputUnit: '秒s',
      outputValue: ''
    },
  
    onInputUnitChange: function (event) {
      this.setData({
        inputUnit: this.data.unitList[event.detail.value]
      })
      this.convert()
    },
  
    onInputValueChange: function (event) {
      this.setData({
        inputValue: event.detail.value
      })
      this.convert()
    },
  
    onOutputUnitChange: function (event) {
      this.setData({
        outputUnit: this.data.unitList[event.detail.value]
      })
      this.convert()
    },
  
    convert: function () {
      const inputUnit = this.data.inputUnit
      const outputUnit = this.data.outputUnit
      const inputValue = parseFloat(this.data.inputValue)
  
      if (isNaN(inputValue)) {
        this.setData({
          outputValue: ''
        })
        return
      }
  
      const inputFactor = this.getFactor(inputUnit)
      const outputFactor = this.getFactor(outputUnit)
  
      const outputValue = inputValue * inputFactor / outputFactor
  
      this.setData({
        outputValue: outputValue.toFixed(9)
      })
    },
  
    getFactor: function (unit) {
      switch (unit) {
        case '微秒us':
  return 0.000001
  case '毫秒ms':
  return 0.001
  case '秒s':
  return 1
  case '分钟min':
  return 60
  case '刻钟qu':
  return 900
  case '小时h':
  return 3600
  case '时辰dh':
  return 7200
  case '天day':
    return 86400
  case '周week':
 return 604800
 case '年yr':
     return 3153600
case '坤年ky':
    return 7884000
  default:
  return 1
  }
  }
  })
  
  