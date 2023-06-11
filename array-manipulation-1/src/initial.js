/* exported initial */
function initial(array) {
  const returnArr = [];
  for (let i = 0; i < array.length - 1; i++) {
    returnArr.push(array[i]);
  }
  return returnArr;
}
