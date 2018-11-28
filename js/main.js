$(document).ready(function () {
  $('.aboutusphoto').slick({
   arrows: false,
   autoplay: true,
   autoplaySpeed: 3000,
   fade: true,
   infinite: true,
 });
});


$(document).ready(function(){
var userFeed = new Instafeed({
	get: 'user',
	userId: '5826265013',
	limit: 4,
	resolution: 'standard_resolution',
	accessToken: '5826265013.1677ed0.8c78148832734754920436acffd6dfb0',
	sortBy: 'most-recent',
	template: '<div class="gallery"><a href="https://www.instagram.com/tacotlantacos/?hl=en" title="Click to visit our Instagram page" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
})
userFeed.run();
});

$(document).ready(function(){
	$(".deliverytab").click(function(){
		$(".vendormain").toggle();
	});
})
