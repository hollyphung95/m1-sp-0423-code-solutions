/* exported getInitialsOfPerson */
/**
 *
 * @param {object} person a Javascript object with firstName and lastName properties.
 * @returns The first and last initials of the person.
 */
function getInitialsOfPerson(person) {
  return person.firstName[0] + person.lastName[0];
}
