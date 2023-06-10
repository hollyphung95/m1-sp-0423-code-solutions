/* exported filterOutStrings */
function filterOutStrings(values) {
  const returnArr = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== String(values[i])) {
      returnArr.push(values[i]);
    }
  }
  return returnArr;
}
