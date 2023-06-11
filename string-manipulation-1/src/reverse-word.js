/* exported reverseWord */
function reverseWord(word) {
  let returnStr = '';
  for (let i = word.length - 1; i >= 0; i--) {
    returnStr += word[i];
  }
  return returnStr;
}
