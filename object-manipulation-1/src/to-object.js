/* exported toObject */
function toObject(keyValuePair) {
  const returnObj = {};
  returnObj[keyValuePair[0]] = keyValuePair[1];
  return returnObj;
}
