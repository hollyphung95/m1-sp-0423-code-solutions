/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const returnArray = [];
  for (let i = 0; i < words.length; i++) {
    returnArray.push(words[i].concat(suffix));
  }
  return returnArray;
}
