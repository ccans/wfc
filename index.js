var droppedDown = false;



// $(".boi").onClick(doStuff);

function clickTime(x) {
  var pos = x+1;
  $("tr").find('td:not(:eq(0))').hide();
  $('td:nth-child('+pos+')').css('display','table-cell');
  $("tr").find('th:not(:eq(0))').hide();
  $('li').removeClass('active');
  $(this).addClass('active');
}



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

// window.onload = function() {
//     var height = $('.img-top').height();
//       $(".main").css("top", height);
// };



window.onresize = function(){
  var height = $('.img-top').height();
    $(".main").css("top", height);
};
