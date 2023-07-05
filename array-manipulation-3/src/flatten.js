/* exported flatten */
function flatten(array) {
  let resultArr = [];
  for (let i = 0; i < array.length; i++) {
    resultArr = resultArr.concat(array[i]);
  }
  return resultArr;
}
