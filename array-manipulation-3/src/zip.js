/* exported zip */
function zip(first, second) {
  const resultArr = [];
  for (let i = 0; i < first.length; i++) {
    if (first[i] && !second[i]) {
      break;
    }
    resultArr.push([first[i], second[i]]);
  }
  return resultArr;
}
