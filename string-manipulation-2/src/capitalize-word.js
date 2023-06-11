/* exported capitalizeWord */
function capitalizeWord(word) {
  return word.toLowerCase() === 'javascript' ? 'JavaScript' : word[0].toUpperCase().concat(word.substring(1).toLowerCase());
}
