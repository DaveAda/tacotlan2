$(document).ready(function(){
$('.familycarousel').slick({
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false
});
});

$(document).ready(function(){
$('.ourstoryimages').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
});
});

$(document).ready(function(){
var userFeed = new Instafeed({
  get: 'user',
  userId: '5826265013',
  limit: 20,
  resolution: 'standard_resolution',
  accessToken: '5826265013.1677ed0.8c78148832734754920436acffd6dfb0',
  sortBy: 'most-recent',
  template: '<div class="gallery"><a href="https://www.instagram.com/tacotlantacos/?hl=en" title="Click to visit us on Instagram" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
})
userFeed.run();
});