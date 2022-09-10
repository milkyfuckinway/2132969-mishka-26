let orederButton = document.querySelector('.product-of-the-week__order');
let modal = document.querySelector('.modal-container');

orederButton.addEventListener('click', function () {
  modal.classList.remove('modal-container--closed');
});
