/* exported invert */
function invert(source) {
  const returnObj = {};
  for (const [key, value] of Object.entries(source)) {
    returnObj[value] = key;
  }
  return returnObj;
}
