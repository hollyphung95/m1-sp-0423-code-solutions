/* exported oddOrEven */
function oddOrEven(numbers) {
  const returnArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      returnArr.push('even');
    } else {
      returnArr.push('odd');
    }
  }
  return returnArr;
}
