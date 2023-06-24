const $container = document.querySelector('.container');
const $box = document.querySelector('.box');

let index = 0;
const bgColors = ['#fef9f1', '#101010'];
const colors = ['#faea84', '#252525'];
const shadows = ['0 -10px 25px 5px #faec84', '0 -10px 25px 5px rgb(0 0 0 /75%)'];

$box.addEventListener('click', function () {
  $container.style.backgroundColor = bgColors[index];
  $box.style.backgroundColor = colors[index];
  $box.style.boxShadow = shadows[index];
  $box.style.backgroundColor = colors[index];
  index = index >= colors.length - 1 ? 0 : index + 1;
});
