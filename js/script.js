// フェードイン・アウト(emergence.js)
$(function(){
    emergence.init({
        reset: false
    });
});


$(function(){
    $('a[href*="#"].head_contact').on('click',function() {
      var speed = 1000;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  });