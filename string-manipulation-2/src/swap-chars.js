/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var resultValue = '';

  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      resultValue += string[secondIndex];
    } else if (i === secondIndex) {
      resultValue += string[firstIndex];
    } else {
      resultValue += string[i];
    }

  }
  return resultValue;
}
