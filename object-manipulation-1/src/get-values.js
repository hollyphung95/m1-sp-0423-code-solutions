/* exported getValues */
function getValues(object) {
  const returnArr = [];
  for (const key in object) {
    returnArr.push(object[key]);
  }
  return returnArr;
}
