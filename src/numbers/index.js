const isEven = (num) => {
  // write code for numbers.isEven
  return true ? num % 2 === 0 : false
}

const sum = (arr) => {
  // write code for numbers.sum
  return arr.reduce((acc, curr) => acc + curr)
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
      if(arr[i] + arr[j] === sum){
        return true
      }
    }
  }
  
  return false

}

module.exports = {
  isEven,
  sum,
  comboSum
}