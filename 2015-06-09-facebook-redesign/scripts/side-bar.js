$(document).ready(function() {
  $('.side-bar')
    .on('mouseenter', function() {
      $(this)
        .find('.expanded')
          .removeClass('invisible');

      $('.header-bar')
        .css('left', '255px');

      $('.news-feed')
        .css('padding', '20px 80px 20px 350px');
    })

    .on('mouseleave', function() {
       $(this)
          .find('.expanded')
            .addClass('invisible');

      $('.header-bar')
        .css('left', '85px');

      $('.news-feed')
        .css('padding', '20px 100px 20px 180px');
    })
})