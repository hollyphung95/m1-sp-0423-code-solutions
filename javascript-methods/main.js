const num1 = 5;
const num2 = 10;
const num3 = 1;
const maximumValue = Math.max(num1, num2, num3);

console.log('value of maximumValue: ', maximumValue);

const heroes = ['Spiderman', 'Superman', 'Wonderwoman', 'Batman'];
const randomNumber = Math.random() * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex: ', randomIndex);

const randomHero = heroes[randomIndex];
console.log('value of randomHero: ', randomHero);

/* Array Methods */
const library = [{ title: 'Clean Code', author: 'Robert C. Martin' }, { title: 'Algorithms', author: 'Robert Sedgewick' }, { title: 'Computer & Internet Security', author: 'Wenliang Du' }];
console.log('value of library: ', library);

const lastBook = library.pop();
console.log('value of lastBook: ', lastBook);

const firstBook = library.shift();
console.log('value of firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);

library.splice(1);
console.log('value of library: ', library);

const fullName = 'Holly Phung';
const firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName: ', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('value of sayMyName: ', sayMyName);
