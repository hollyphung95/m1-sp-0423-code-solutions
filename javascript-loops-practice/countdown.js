/* exported countdown */
function countdown(number) {
  const returnArr = [];
  while (number >= 0) {
    returnArr.push(number);
    --number;
  }
  return returnArr;
}
