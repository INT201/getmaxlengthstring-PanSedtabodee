const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  let maxL = 0
  let arr = arrayOfString
  if (arr === null || arr === undefined) {
    return undefined
  }else{
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > maxL) {
        maxL = arr[i].length
      }
    }
    return arr.filter(arr => arr.length === maxL)
  }
}

module.exports = getMaxLengthString
