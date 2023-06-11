/* exported includes */
function includes(array, value) {
  let returnBool = false;
  for (const i in array) {
    if (array[i] === value) {
      returnBool = true;
    }
  }
  return returnBool;
}
