let demonstration = document.querySelector('.demonstration__video');
let videoButton = document.querySelector('.demonstration__play');

videoButton.addEventListener('click', function () {
    videoButton.classList.add('demonstration__play--video-started');
    demonstration.classList.add('demonstration__video--started');
  }
);
