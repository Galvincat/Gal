Page({
    data: {
      unitList: ['毫克mg', '克g', '千克kg', '吨t', '磅lb', '盎司oz', '克拉ct','担','钱','两','斤'],
      inputUnit: '千克kg',
      inputValue: '',
      outputUnit: '千克kg',
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
        case '毫克mg':
  return 0.000001
  case '克g':
  return 0.001
  case '千克kg':
  return 1
  case '吨t':
  return 1000
  case '磅lb':
  return 0.45359237
  case '盎司oz':
  return 0.028349523125
  case '克拉ct':
  return 0.0002
  case '担':
    return 50
  case '钱':
 return 0.005
 case '两':
     return 0.05
case '斤':
    return 0.5
  default:
  return 1
  }
  }
  })
  
  