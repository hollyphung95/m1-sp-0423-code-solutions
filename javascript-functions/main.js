/**
 * Returns minutes multiplied by 60.
 * @param {number} minutes
 * @returns the equivalent number of seconds.
 */
function convertMinutesToSeconds(minutes) {
  const seconds = 60 * minutes;
  return seconds;
}
console.log('There are ', convertMinutesToSeconds(5), ' seconds');

/**
 * Returns a greeting that includes name.
 * @param {string} name a string representing a person's name.
 * @returns a greeting that includes the name.
 */
function greet(name) {
  const greeting = 'Hi ' + name + ', have a great day !';
  return greeting;
}
console.log(greet('Holly'));

/**
 * Returns width multiplied by height
 * @param {number} x The width of rectangle.
 * @param {number} y The height of the rectangle.
 * @returns the area of that rectangle
 */
function getArea(x, y) {
  return x * y;
}
console.log('the area of the width and height is :', getArea(2, 5));

/**
 * Return the firstName of the person
 * @param {object} person contains firstName and lastName properties
 * @returns first name of person.
 */
function getFirstName(person) {
  return person.firstName;
}
console.log('the persons first name is: ', getFirstName({
  firstName: 'Holly',
  lastName: 'Phung'
}));

/**
 * Returns the last element of the list
 *
 * @param {array} array list of elements
 * @returns The last element of the array.
 */
function getLastElement(array) {
  return array[array.length - 1];
}
console.log(getLastElement([]));
