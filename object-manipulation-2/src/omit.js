/* exported omit */
function omit(source, keys) {
  const returnObj = {};
  for (const prop in source) {
    if (!keys.includes(prop)) {
      returnObj[prop] = source[prop];
    }
  }
  return returnObj;
}
