Page({
    data: {
      unitList: ['立方毫米', '立方厘米', '立方分米', '立方米m³', '毫升mL', '升L', '公石hL','立方坤米IK³' ],
      inputUnit: '立方米m³',
      inputValue: '',
      outputUnit: '立方米m³',
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
        case '立方毫米':
  return 0.000000001
  case '立方厘米':
  return 0.000001
  case '立方分米':
  return 0.001
  case '立方米m³':
  return 1
  case '毫升mL':
  return 0.000001
  case '升L':
  return 0.001
  case '公石':
  return 0.1
  case '立方坤米IK³':
 return 2.5
  default:
  return 1
  }
  }
  })
  
  