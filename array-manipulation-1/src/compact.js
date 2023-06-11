/* exported compact */
function compact(array) {
  const returnArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      returnArr.push(array[i]);
    }
  }
  return returnArr;
}
