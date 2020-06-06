$(window).on("scroll", function() {
    if($(window).scrollTop() > 20) {
        $(".header").addClass("active");
        console.log("ok");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".header").removeClass("active");

    }



});

document.getElementById("body").onscroll = function() {myFunction()};



function myFunction() {
  console.log("ok");
        if($(window).scrollTop() > 20) {
            $(".header").addClass("active");
            console.log("ok");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");

        }



    }
