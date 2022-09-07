let demonstration = document.querySelector('.demonstration__video');
let videoButton = document.querySelector('.demonstration__play');

demonstration.classList.remove('demonstration__video--nojs');

videoButton.addEventListener('click', function () {
    videoButton.classList.add('demonstration__play--video-started');
    demonstration.classList.add('demonstration__video--started');
  }
);
