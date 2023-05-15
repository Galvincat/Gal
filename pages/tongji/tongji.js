Page({
    data: {
      input: '',
      median: '',
      average: '',
      sum: '',
      variance: '',
      standardDeviation: '',
      percentages: '',
      weightedAverage: '',
    },
    onInput(event) {
      this.setData({
        input: event.detail.value,
      })
    },
    calculate() {
      const data = this.convertInputToArray(this.data.input)
      const sortedData = this.sortData(data)
      const median = this.calculateMedian(sortedData)
      const average = this.calculateAverage(sortedData)
      const sum = this.calculateSum(sortedData)
      const variance = this.calculateVariance(sortedData, average)
      const standardDeviation = this.calculateStandardDeviation(variance)
      const percentages = this.calculatePercentages(sortedData, sum)
      const weightedAverage = this.calculateWeightedAverage(sortedData, percentages)
      this.setData({
        median: median.toFixed(2),
        average: average.toFixed(2),
        sum: sum.toFixed(2),
        variance: variance.toFixed(2),
        standardDeviation: standardDeviation.toFixed(2),
        percentages: this.formatPercentages(percentages),
        weightedAverage: weightedAverage.toFixed(2),
      })
    },
    convertInputToArray(input) {
      const trimmedInput = input.trim()
      if (trimmedInput === '') {
        return []
      }
      const data = trimmedInput.split(',').map((item) => {
        return parseFloat(item.trim())
      })
      return data
    },
    sortData(data) {
      return data.sort((a, b) => {
        return a - b
      })
    },
    calculateMedian(sortedData) {
      const length = sortedData.length
      if (length % 2 === 0) {
        const mid = length / 2
        const value1 = sortedData[mid - 1]
  const value2 = sortedData[mid]
  return (value1 + value2) / 2
  } else {
  const mid = Math.floor(length / 2)
  return sortedData[mid]
  }
  },
  calculateAverage(data) {
  const sum = this.calculateSum(data)
  return sum / data.length
  },
  calculateSum(data) {
  return data.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
  }, 0)
  },
  calculateVariance(data, average) {
  const length = data.length
  if (length === 0) {
  return 0
  }
  const deviations = data.map(item => {
  return (item - average) ** 2
  })
  const variance = deviations.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
  }, 0) / length
  return variance
  },
  calculateStandardDeviation(variance) {
  return Math.sqrt(variance)
  },
  calculatePercentages(data, sum) {
  if (sum === 0) {
  return []
  }
  const percentages = data.map(item => {
  return (item / sum) * 100
  })
  return percentages
  },
  calculateWeightedAverage(data, percentages) {
  if (data.length === 0) {
  return 0
  }
  const weightedSum = data.reduce((accumulator, currentValue, index) => {
  const percentage = percentages[index]
  return accumulator + currentValue * percentage
  }, 0)
  const weightedAverage = weightedSum / 100
  return weightedAverage
  },
  formatPercentages(percentages) {
  return percentages.map(item => {
  return item.toFixed(2)
  }).join(', ')
  },
  })