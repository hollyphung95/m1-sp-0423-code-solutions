const colors = ['red', 'white', 'blue'];
console.log('value of colors[0]: ', colors[0]);
console.log('value of colors[1]: ', colors[1]);
console.log('value of colors[2]: ', colors[2]);

let strResult = 'America is ' + colors[0] + ', ' + colors[1] + ', ' + colors[2] + '.';
console.log('value of strResult: ', strResult);

colors[2] = 'green';
strResult = 'Mexico is ' + colors[0] + ', ' + colors[1] + ', ' + colors[2] + '.';
console.log('value of strResult: ', strResult);
console.log('value of colors: ', colors);

const students = ['Adam', 'Brett', 'Monique', 'Holly'];
const numberOfStudents = students.length;
console.log('value of numberOfStudents: ', numberOfStudents);

const lastIndex = numberOfStudents - 1;
const lastStudent = students[lastIndex];
console.log('value of lastStudent: ', lastStudent);
console.log('value of students: ', students);
