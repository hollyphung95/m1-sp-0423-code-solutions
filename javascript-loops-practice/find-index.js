/* exported findIndex */
function findIndex(array, value) {
  let firstOccurence = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      firstOccurence = i;
      break;
    }
  }
  return firstOccurence;
}
