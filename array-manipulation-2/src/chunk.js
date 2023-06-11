/* exported chunk */
function chunk(array, size) {
  const returnArr = [];
  for (let i = 0; i < array.length;) {
    returnArr.push(array.slice(i, i += size));
  }
  return returnArr;
}
