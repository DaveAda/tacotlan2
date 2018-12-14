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
  $('.deliveryhover').hover(function(){
    $('.dropdownmenucontainer').fadeIn();
  });
})
$('.dropdownmenu').mouseleave(function(){
  $('.dropdownmenucontainer').fadeOut();
});


/*MOBILE DELIVERY DROPDOWN*/
/*
$(document).ready(function(){
  $('.deliveryiconmobile').hide();
});

$(document).ready(function(){
  $('#deliverytouch').click(function(){
    $('#deliveryiconmobile').slideToggle();
  });
})
*/
/*MOBILE DROPDOWN*/
/*
$(document).ready(function(){
  $('.mobiledropdown').hide();
});

$(document).ready(function(){
  $('#mobileheader').click(function(){
    $('.mobiledropdown').slideToggle();
  })
});
*/
/*MOBILE INFO DROPDOWN*/
  /*MOBILE HOURS DROPDOWN*/
  /*
  $(document).ready(function(){
  $('.mobilehours').hide();
});

$(document).ready(function(){
  $('#infotouch').click(function(){
    $('.mobilehours').slideToggle();
  });
})

$(document).ready(function(){
  $('.mhours2').hide();
});

$(document).ready(function(){
  $('#mhours').click(function(){
    $('.mhours2').slideToggle();
  });
})
*/
/*MOBILE LOCATION DROPDOWN*/
/*
$(document).ready(function(){
  $('.mloc2').hide();
});

$(document).ready(function(){
  $('#mloc').click(function(){
    $('.mloc2').slideToggle();
  })
});
*/
/*MOBILE CONTACT*/
/*
$(document).ready(function(){
  $('#mobilecontact').hide();
});

$(document).ready(function(){
  $('#mobilecontactbutton').click(function(){
    $('#mobilecontact').toggle();
  })
});

$('#mobilecontactbutton').click(function() {
  $('.mobiledropdown').toggleClass('mobile96');
});

$('#mobilecontactbutton').click(function() {
  $('.mobiledropdowncontainer').toggleClass('mobile50');
});
*/
/*CONTACT / CATERING TOGGLE*/
$(document).ready(function(){

        var $contactform = $('.contactform');
        var $cateringform = $('.cateringform');
        var $contacttitle = $('.contacttitle');
        var $cateringtitle = $('.cateringtitle');
        var $contactnames = $('.contactnames');
        var $cateringnames = $('.cateringnames');
        var $mcontacttab = $('.mcontacttab');
        var $mcateringtab = $('.mcateringtab');
        var $mcontact = $('.mcontact');
        var $mcatering = $('.mcatering');
        var $mcontainer = $('.mcontainer');
        var $fullwidth = $('.fullwidth');
        var $mcontactli = $('.mcontactli');
        var $msubmenu = $('.msubmenu');
        var $mdeliveryli = $('.mdeliveryli');
        var $mdelivery = $('.mdelivery');
        var $minfo = $('.minfo');
        var $minfoli = $('.minfoli');
        var $mdropdown = $('.mdropdown');
        var $mobileheader = $('#mobileheader');


        $mobileheader.click(function(){
          $mdropdown.toggle();
        });
        $contacttitle.click(function(){
          $contactform.show();
          $cateringform.hide();
        });
        $cateringtitle.click(function(){
          $cateringform.show();
          $contactform.hide();
        });
        $mcontacttab.click(function(){
          $mcontact.fadeIn();
          $mcontainer.addClass('fullwidth','slow');
          $mcatering.hide();
          $minfo.hide();
        });
        $mcateringtab.click(function(){
          $mcatering.fadeIn();
          $mcontainer.addClass('fullwidth','slow');
          $mcontact.hide();
          $minfo.hide();
        });
        $mcontactli.click(function(){
          $mcontact.hide();
          $mcatering.hide();
          $mcontainer.removeClass('fullwidth', 'slow');
          $msubmenu.slideToggle();
          $minfo.hide();
        });
        $mdeliveryli.click(function(){
          $mdelivery.slideToggle();
        });
        $minfoli.click(function(){
          $minfo.fadeIn();
          $mcontainer.addClass('fullwidth');
          $mcontact.hide();
          $mcatering.hide();
        });
    });

    function submitForm() {
   // Get the first form with the name
   // Usually the form name is not repeated
   // but duplicate names are possible in HTML
   // Therefore to work around the issue, enforce the correct index
   var frm = document.getElementsByName('contactform')[0];
   frm.submit(); // Submit the form
   frm.reset();  // Reset all form data
   return false; // Prevent page refresh
}

        /*var $header = $('.header');
        var $bios = $('.bios');
        var $zurich = $('.zurich');
        var $barrington = $('.barrington');
        var $zurichclick = $('.zurichclick');
        var $barringtonclick = $('.barringtonclick');

        $zurichclick.click(function(){
          $zurich.slideToggle();
          $barrington.slideUp();
        });
        $barringtonclick.click(function(){
          $barrington.slideToggle();
          $zurich.slideUp();
        });
        $header.mouseleave(function(){
          $zurich.fadeOut();
          $barrington.fadeOut();
        });
    });*/