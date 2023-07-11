/* exported intersection */
function intersection(first, second) {
  const resultArr = first.filter(x => second.includes(x));
  return resultArr;
}
