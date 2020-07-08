$(document).ready(function() {

// navbar del main

$(".nav-main li").hover(function () {
  $(this).addClass("text-active");
}, function () {
  $(this).not("#fisso").removeClass("text-active");
});

// navbar fixed

// attivazione dropdown su click
  $(".parent-dropdown").click(function () {
    $(".parent-dropdown").removeClass("text-active");
    $(".parent-dropdown").children(".dropdown").removeClass("drop-active");
    $(this).children(".dropdown").addClass("drop-active").toggle();
  });

// evidenziamento testo
  $(".dropdown li a").hover(function () {
    $(this).addClass("text-active");
  }, function () {
    $(this).removeClass("text-active");
  });

  $(".parent-dropdown").hover(function () {
    $(this).addClass("text-active");
  }, function () {
    $(this).removeClass("text-active");
  });

  // media smartphone

  if ($(window).width() < 720) {
    // rimozione classe container
    $('.nav-fixed').removeClass('container');

    $(".nav-fixed i").click(function () {
      $(".hamburger-dropdown").addClass("drop-active");
    });

    $(".drop-nav i").click(function () {
      $(".hamburger-dropdown").removeClass("drop-active");
    });
  }
});
