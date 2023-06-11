/* exported take */
function take(array, count) {
  const returnArr = [];
  if (array.length === 0) {
    return returnArr;
  } else if (array.length < count) {
    for (const i in array) {
      returnArr.push(array[i]);
    }
  } else {
    for (let i = 0; i < count; i++) {
      returnArr.push(array[i]);
    }
    return returnArr;
  }
}
