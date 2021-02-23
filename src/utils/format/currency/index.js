const numeral = require('numeral')

// SIMPLE FORMATING
exports.formatNumberToString = (number) => {
  if (number > 1000000)
    number = 1000000
  const result = numeral(number).format('0,0')
  return result
}

exports.formatStringToNumber = (string) => {
  const result = numeral(string).value()
  return result
}