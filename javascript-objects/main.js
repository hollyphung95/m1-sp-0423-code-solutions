const student = {
  firstName: 'Holly',
  lastName: 'Phung',
  age: 27
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'student';

console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);

const vehicle = {
  make: 'Honda',
  model: 's2000',
  year: 2000
};
vehicle['color'] = 'black';
vehicle['isConvertible'] = true;

console.log("value of vehicle['color']: ", vehicle['color']);
console.log("value of vehicle['isConvertible']: ", vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

const pet = {
  name: 'Princess Jr.',
  type: 'Doberman'
};
delete pet.name;
delete pet.type;
console.log('value of pet: ', pet);
