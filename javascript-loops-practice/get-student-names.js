/* exported getStudentNames */
function getStudentNames(students) {
  const returnArr = [];
  for (let i = 0; i < students.length; i++) {
    returnArr.push(students[i].name);
  }
  return returnArr;
}
