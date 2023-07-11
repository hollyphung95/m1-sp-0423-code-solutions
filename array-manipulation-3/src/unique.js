/* exported unique */
function unique(array) {
  const resultArr = [...new Set([...array])];
  return resultArr;
}
