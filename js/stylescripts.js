var droppedDown = false;

function dropDown() {
  if(droppedDown == false) {
        $('.dropdown-navbar').stop();
          curHeight =  $('.dropdown-navbar').height();
          autoHeight = $(window).height(); - $('.header').height();
        $('.dropdown-navbar').height(curHeight).animate({height: autoHeight}, 750);
        $('body').addClass("unscroll");
        $('.dropdown-navbar').show();
        $('.dropdown-content').css("display", "block");
        $('.header').addClass('dropdown');
        droppedDown = true;
    } else {
      $('.dropdown-navbar').stop();
      curHeight = $('.dropdown-navbar').height();
      autoHeight = '0px';
      $('.dropdown-navbar').height(curHeight).animate({height: autoHeight}, 750);
      $('body').removeClass("unscroll");
      setTimeout(function(){
      $('.dropdown-content').css("display", "none");
    }, 750);
      droppedDown = false;
      $('.header').removeClass("dropdown")

    }
}







window.onload = function() {
    $('.titleText').fadeIn(1000);
};

$(function(){
  $(window).scroll(function(){
    console.log("ok");
    var aTop = $('.ad').height();
    if($(this).scrollTop()>=aTop){
        console.log('header just passed.');
        // instead of alert you can use to show your ad
        // something like $('#footAd').slideup();
    }
  });
});

var rn = Math.floor((Math.random() * 150) + 60);
var rs = Math.floor((Math.random() * 11) + 4);
	var t = new Trianglify({
 x_gradient: Trianglify.colorbrewer.Spectral[rs],
    noiseIntensity: 0,
    cellsize: rn
});
var pattern = t.generate(window.innerWidth, window.innerWidth+200);
document.body.setAttribute('style', 'background-image: '+pattern.dataUrl);
