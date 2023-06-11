/* exported getKeys */
function getKeys(object) {
  const returnArr = [];
  for (const key in object) {
    returnArr.push(key);
  }
  return returnArr;
}
