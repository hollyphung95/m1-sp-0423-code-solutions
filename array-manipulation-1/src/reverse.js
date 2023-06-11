/* exported reverse */
function reverse(array) {
  const returnArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    returnArr.push(array[i]);
  }
  return returnArr;
}
