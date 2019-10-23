 // PARALLAX SCOLL EFFECT

window.addEventListener('scroll', function(e) {

  const vertOne = document.querySelector('.scroll');

  var scrolled  = window.pageYOffset;
  var rate = scrolled * -0.5;

  vertOne.style.transform = 'translate3d(0px, '+ rate +'px, 0px)';

});

// IMAGE UPLOADING
