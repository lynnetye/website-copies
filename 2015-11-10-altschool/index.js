var altSchool = {
  changeHeroImage: function(imageNum) {
    if (imageNum === 0) {
      $('.hero--image.image-5').fadeOut(1000);
      $('.hero--image.image-1').fadeIn(1000);
    } else {
      $('.hero--image.image-' + (imageNum - 1)).fadeOut(1000);
      $('.hero--image.image-' + imageNum).fadeIn(1000);
    }
  },

  rotateHeroImages: function() {
    var x = 0;

    for (var i = 1; i <= 6; i++) {
      setTimeout(function() {
        altSchool.changeHeroImage(x);
        x++;

        if (x === 6) {
          altSchool.rotateHeroImages();
        }
      }, 3000 * (i))
    }

  }
};

$(document).ready(function () {
  $('.hero--image.image-1').fadeIn();
  altSchool.rotateHeroImages();
})
