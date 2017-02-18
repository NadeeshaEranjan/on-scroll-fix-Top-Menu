var header = $("#guide-template");
// var header = $("#affix");
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
       if (scroll >= 181) {
          header.addClass("fixed");
        } else {
          header.removeClass("fixed");
        }
});