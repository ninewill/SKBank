var app = new Vue({
  el: '#app',
  data: function () {
    return {
      cur: 0,
    };
  },
});

var isMenuOpen = false;

function toggleMenu() {
  if (!isMenuOpen) {
    $('body').addClass('is-hidden');
    $('.header').addClass('is-open');
    $('.nav-menu').addClass('is-active');
    $('.m-menu').addClass('is-active');
    TweenMax.staggerTo(
      '.m-menu-item li',
      0.7,
      { opacity: 1, x: 0, ease: Expo.easeInOut },
      0.1
    );
  } else {
    $('body').removeClass('is-hidden');
    $('.header').removeClass('is-open');
    $('.nav-menu').removeClass('is-active');
    $('.m-menu').removeClass('is-active');
    TweenMax.staggerTo(
      '.m-menu-item li',
      0.7,
      { opacity: 0, x: -50, ease: Expo.easeInOut },
      0.1
    );
  }
  isMenuOpen = !isMenuOpen;
  return;
}

var section1Btn = document.getElementById('section1Btn'),
  section2Btn = document.getElementById('section2Btn'),
  section3Btn = document.getElementById('section3Btn');

section1Btn.onclick = function () {
  TweenLite.to(window, 1, {
    scrollTo: { y: '#section1', offsetY: 70, autoKill: false },
  });
};

section2Btn.onclick = function () {
  TweenLite.to(window, 1, {
    scrollTo: { y: '#section2', offsetY: 70, autoKill: false },
  });
};

section3Btn.onclick = function () {
  TweenLite.to(window, 1, {
    scrollTo: { y: '#section3', offsetY: 10, autoKill: false },
  });
};
