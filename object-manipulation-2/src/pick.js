/* exported pick */
function pick(source, keys) {
  const returnObj = {};
  for (const prop in source) {
    if (keys.includes(prop) && source[prop] !== undefined) {
      returnObj[prop] = source[prop];
    }
  }
  return returnObj;
}
