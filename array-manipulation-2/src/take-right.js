/* exported takeRight */
function takeRight(array, count) {
  var resultArray = [];
  if (array.length === 0) {
    return resultArray;
  } else if (array.length < count) {
    for (const i in array) {
      resultArray.push(array[i]);
    }
  } else {
    for (let i = array.length - count; i <= array.length - 1; i++) {
      resultArray.push(array[i]);
    }
  }
  return resultArray;
}
