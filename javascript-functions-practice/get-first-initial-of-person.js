/* exported getFirstInitialOfPerson */
/**
 *
 * @param {object} person a Javascript object with firstName and lastName properties.
 * @returns The first initial of the person.
 */
function getFirstInitialOfPerson(person) {
  return person.firstName[0];
}
