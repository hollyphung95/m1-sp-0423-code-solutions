/* exported drop */
function drop(array, count) {
  const returnArr = [];
  for (let i = count; i < array.length; i++) {
    returnArr.push(array[i]);
  }
  return returnArr;
}
