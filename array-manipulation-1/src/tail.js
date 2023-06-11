/* exported tail */
function tail(array) {
  const returnArr = [];
  for (let i = 1; i < array.length; i++) {
    returnArr.push(array[i]);
  }
  return returnArr;
}
