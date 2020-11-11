$(document).ready(function () {
  /* _nav */
  const bar = $('.bar');
  const times = $('.times');
  const ul = $('.main-nav-list');
  const overlay = $('.overlay');

  /* _services */
  const servicesItem = $('.services-item-1');
  const imgSpa = $('.spa');
  const servicesOverlay = $('.services-overlay');
  const servicesImg = $('.services-item-img');
  console.log(servicesItem);


  ul.hide();
  // overlay.fadeOut();


  /* _nav events */
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


  /* _services events */
  // servicesItem.addClass('services-overlay');

});


