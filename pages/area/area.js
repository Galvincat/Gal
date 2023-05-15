Page({
    data: {
      unitList: ['平方毫米', '平方厘米', '平方分米', '平方米', '平方千米', '公顷', '亩', '平方英寸'],
      inputUnit: '平方米',
      inputValue: '',
      outputUnit: '平方米',
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
        outputValue: outputValue.toFixed(6)
      })
    },
  
    getFactor: function (unit) {
      switch (unit) {
        case '平方毫米':
  return 0.000001
  case '平方厘米':
  return 0.0001
  case '平方分米':
  return 0.01
  case '平方米':
  return 1
  case '平方千米':
  return 1000000
  case '公顷':
  return 10000
  case '亩':
  return 666.66666666667
  case '平方英寸':
  return 0.00064516
  default:
  return 1
  }
  }
  })
  
  