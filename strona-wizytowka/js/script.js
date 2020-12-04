$(document).ready(function() {
  const hamburger = $('#hamburger');
  const times = $('#times');
  const menuOpen = $('#menu-open');
  console.log(hamburger);

  hamburger.click(function() {
    hamburger.addClass('hide');
    times.fadeIn(550);
    menuOpen.slideDown(550);
  });

  times.click(function() {
      menuOpen.slideUp(550);
      times.fadeOut();
      hamburger.removeClass('hide');
    });
});