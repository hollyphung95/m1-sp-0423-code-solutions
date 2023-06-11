/* exported truncate */
function truncate(length, string) {
  var resultString = '';
  var ellipsis = '...';

  if (string.length === 0) {
    return ellipsis;
  } else if (string.length < length) {
    for (var index in string) {
      resultString += string[index];
    }
  } else {
    for (var i = 0; i < length; i++) {
      resultString += string[i];
    }
  }
  resultString += ellipsis;
  return resultString;
}
