/* exported getDescriptionOfPerson */
/**
 *
 * @param {object} person a Javascript object with name, occupation, and birthPlace properties.
 * @returns A description of the person (see example).
 */
function getDescriptionOfPerson(person) {
  return person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
}
