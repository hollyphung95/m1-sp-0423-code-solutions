/* exported sumAll */
function sumAll(numbers) {
  let returnVal = 0;
  for (let i = 0; i < numbers.length; i++) {
    returnVal += numbers[i];
  }
  return returnVal;
}
