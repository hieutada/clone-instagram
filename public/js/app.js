$(document).ready(function () {
  $('.story-slider').slick({
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 7,
    prevArrow: `<button type="button" class="slick-prev"><i class="fas fa-chevron-circle-left"></i></button>`,
    nextArrow: `<button type="button" class="slick-next"><i class="fas fa-chevron-circle-right"></i></button>`,
    responsive: [
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  });
});

function resetTextArea(element) {
  element.style.height = '1.8rem';
  element.style.height = element.scrollHeight + 'px';
}

const videoObjects = document.getElementsByClassName('post-card__video');
const videoList = Object.values(videoObjects);
const isInViewport = function (elem) {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};
videoList.forEach((element) => {
  const playBtn = element.querySelector('.post-card__played-btn');
  const mutedBtn = element.querySelector('.post-card__muted-btn');
  const video = element.querySelector('video');

  [video, playBtn].forEach((e) => {
    e.addEventListener('click', () => {
      if (video.paused) {
        playBtn.style.display = 'none';
        document.querySelectorAll('video').forEach((e) => e.pause());
        video.play();
      } else {
        playBtn.style.display = 'block';
        video.pause();
      }
    });
  });

  
  mutedBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    if (video.muted) {
      mutedBtn.classList.remove('fa-volume-up');
      mutedBtn.classList.add('fa-volume-slash');
    } else {
      mutedBtn.classList.remove('fa-volume-slash');
      mutedBtn.classList.add('fa-volume-up');
    }

    document.querySelectorAll('video')
  });
});

const topnavMobile = document.querySelector('.topnav__mobile');
const chatbar = document.querySelector('.inbox__chatbar');
const explorebar = document.querySelector('.explore__search-bar');

if (chatbar || explorebar) {
  topnavMobile.style.display = 'none';
}
