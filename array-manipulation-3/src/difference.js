/* exported difference */
function difference(first, second) {
  const resultArr = first
    .filter(x => !second.includes(x))
    .concat(second.filter(x => !first.includes(x)));
  return resultArr;
}
