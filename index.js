// var array = [1,2,3,4,5]

function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var array = ["minny", "mickey"]
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
