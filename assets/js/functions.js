var host = "http://taherj.github.io";
if ((host == window.location.host) && (window.location.protocol != "https:"))
    window.location.protocol = "https";

document.addEventListener("DOMContentLoaded", function() {
  smoothScroll(1000);
  workBelt();
  workLoad();
  makeSticky();
});

//Sticky Navigation
function makeSticky(){
  var myWindow = $( window ),
      myHeader = $( "header" );

  myWindow.scroll( function(){
    if( myWindow.scrollTop() === 0 ){
      myHeader.removeClass("sticky-nav");
    } else{
      myHeader.addClass("sticky-nav");
    }
  } );
}

//Smooth Scroll
function smoothScroll (duration) {
$('a[href^="#"]').on('click', function(event) {
    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, duration);
    }
   });
}

//Work Belt
function workBelt() {
  $(".trigger").remove();
  $(".return").remove();

  $('.thumb-unit').click(function() {
    $('.work-belt').addClass("slided");
    $('.work-container').show();
  });

  $('.work-return').click(function() {
    $('.work-belt').removeClass("slided");
    $('.work-container').hide(800);
  });

}

//Work Load
function  workLoad() {
  $.ajaxSetup({ cache: true });
  $('.thumb-unit').click(function() {
    var $this = $(this),
        newTitle = $this.find('strong').text(),
        newfolder = $this.data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = 'work/'+ newfolder;

    $('.project-load').html(spinner).load(newHTML);
    $('.project-title').text(newTitle);
  });
}
