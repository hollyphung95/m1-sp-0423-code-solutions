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
