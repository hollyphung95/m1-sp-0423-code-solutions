/* exported capitalizeWords */
function capitalizeWords(string) {
  var resultString = '';
  var stringBuilder = '';
  var strArray = string.split(' ');

  for (var word in strArray) {
    stringBuilder += ((strArray[word].charAt(0).toUpperCase()).concat(strArray[word].substring(1).toLowerCase())).concat(' ');
  }
  resultString = stringBuilder;

  return resultString.trimEnd();
}
