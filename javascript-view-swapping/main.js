const $tabContainer = document.querySelector('.tab-container');
const $tabElements = document.querySelectorAll('.tab');
const $viewElements = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabElements.length; i++) {
      if ($tabElements[i] === event.target) {
        $tabElements[i].className = 'tab active';
        $viewElements[i].className = 'view';
      } else {
        $tabElements[i].className = 'tab';
        $viewElements[i].className = 'view hidden';
      }
    }
  }
});
