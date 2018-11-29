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
    $(".demo").myig(
        ins_id = 503807090, // your user_id
        ins_count = 10, // Count of media to return
        ins_token = '141970.467ede5.edbc9c37472d41b790e1db8948793f11' // your token
    );
});

$(document).ready(function(){    
    $(".myig_popup").fancybox({
        openEffect : 'fade',
        closeEffect : 'fade'
    });
});