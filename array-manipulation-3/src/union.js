/* exported union */
function union(first, second) {
  const resultArr = [...new Set([...first, ...second])];
  return resultArr;
}
