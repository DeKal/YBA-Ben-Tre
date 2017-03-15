jQuery(document).ready(function($) {

$('.thu-vien-anh-review').find('.bwg_album_0').off( "click").on("click", function(){
     window.location.href = '/thu-vien-anh';
    return false;
});
$('.email-input').val('');
setTimeout(function() {
    $('.mc4wp-response').fadeOut('fast');
}, 5000);

jQuery( window ).resize(function() {
  	change_height_news();
});

  	

function change_height_news() {
  var cw = jQuery('.caroufredsel_wrapper .content_slider_ul li a').width()*315/495;
  jQuery('.caroufredsel_wrapper .content_slider_ul li a').css({'height':cw+'px'});
  console.log(cw);
  if (cw == 0)
  {
  	jQuery('.home-fan-page .fan-page').css({'height':'450px'});
  }
  else
  {
	  jQuery('.home-fan-page .fan-page').css({'height':cw+'px'});
  }	

}

});
