/* exported filterOutNulls */
function filterOutNulls(values) {
  const returnArr = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      returnArr.push(values[i]);
    }
  }
  return returnArr;
}
