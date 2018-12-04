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
  limit: 30,
  resolution: 'standard_resolution',
  accessToken: '5826265013.1677ed0.8c78148832734754920436acffd6dfb0',
  sortBy: 'most-recent',
  template: '<div class="gallery"><a href="https://www.instagram.com/tacotlantacos/?hl=en" title="Click to visit us on Instagram" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
})
userFeed.run();
});

/*DELIVERY DROPDOWN*/
$(document).ready(function(){
  $('.dropdownmenucontainer').hide();
});

$(document).ready(function(){
  $('.deliveryhover').hover(function(){
    $('.dropdownmenucontainer').fadeIn();
  });
})
$('.dropdownmenu').mouseleave(function(){
  $('.dropdownmenucontainer').fadeOut();
});


/*MOBILE DELIVERY DROPDOWN*/
$(document).ready(function(){
  $('.deliveryiconmobile').hide();
});

$(document).ready(function(){
  $('#deliverytouch').click(function(){
    $('#deliveryiconmobile').toggle();
  });
})
/*MOBILE DROPDOWN*/
$(document).ready(function(){
  $('.mobiledropdown').hide();
});

$(document).ready(function(){
  $('#mobileheader').click(function(){
    $('.mobiledropdown').toggle();
  })
});
/*MOBILE INFO DROPDOWN*/
  /*MOBILE HOURS DROPDOWN*/
  $(document).ready(function(){
  $('.mobilehours').hide();
});

$(document).ready(function(){
  $('#infotouch').click(function(){
    $('.mobilehours').toggle();
  });
})

$(document).ready(function(){
  $('.mhours2').hide();
});

$(document).ready(function(){
  $('#mhours').click(function(){
    $('.mhours2').toggle();
  });
})

/*MOBILE LOCATION DROPDOWN*/
$(document).ready(function(){
  $('.mloc2').hide();
});

$(document).ready(function(){
  $('#mloc').click(function(){
    $('.mloc2').toggle();
  })
});


