$(document).ready(function () {
  const bar = $('.bar');
  const times = $('.times');
  const ul = $('.main-nav-list');
  const overlay = $('.overlay');
  console.log(overlay);

  ul.hide();
  overlay.fadeOut();

  console.log(bar);
  console.log(times);
  console.log(ul);



  bar.click(function () {
    bar.addClass('not-visible');
    times.removeClass('not-visible');

    ul.slideDown(500, function () {
      overlay.fadeIn(1000);
    });




    times.click(function () {
      bar.removeClass('not-visible');

      ul.slideUp(500, function () {
        overlay.fadeOut(1000);
      });
    });

  });
});

