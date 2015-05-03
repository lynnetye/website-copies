function typeInInput($input, text){
  var string = '',
      x = 0;

  for (var i = 0; i < text.length; i++){
    setTimeout(function (){
      string += text[x];
      $input.text(string);
      $input.css({
        'color':'black',
        'letter-spacing': '0'
      });
      x++;
    }, 100 * i); //100 * i
  }
};


// SLIDE ONE
var $showMeButton = $('.show-me-button'),
    $articleTitle = $('article.slide-1 > h1'),
    $articleBody = $('article.slide-1 > p'),
    $iPhone = $('.iphone'),
    $dribbbleExample = $('.dribbble-example').closest('form');

function startDemo(){
  console.log("called function");
  $articleTitle.animate({top: '150px', opacity: '0'}, '1000');
  $articleTitle.addClass('hide');
  $articleBody.animate({top: '100px', opacity: '0'}, '1200');
  $articleBody.addClass('hide');
  $showMeButton.animate({top: '80px', opacity: '0'}, '1500');
  $showMeButton.addClass('hide');
  $iPhone.animate({left: '150px'}, '1500', function(){
    $(this).animate({display: 'none'})
    $dribbbleExample.animate({left: '40%'}, '10000', function(){
      playSlideTwo();
    });
  });

};

// SLIDE TWO
// Three parts: (1) show left text, (2) demo form, (3) show right text

// PART I : show left text
var $textPartOne = $('.slide-2.part-1'),
    $textPartTwo = $('.slide-2.part-2');

function playSlideTwo(){
  console.log('ready');
  $textPartOne.removeClass('hide');
  $textPartOne.children().removeClass('hide');
  $textPartOne.animate({top: '0px', opacity: '1'}, '1000', function(){
    fillOutFormDemo();
  });
};

// PART II : demo form
function fillOutFormDemo(){
  var $email = $('p.form-email'),
      $cardNumber = $('p.form-card-number'),
      $mmYY = $('p.form-mm-yy'),
      $CVC = $('p.form-cvc'),
      $visaCC = $('img.visa-credit-card');
      // arrayOfInputs = [$email, $cardNumber, $mmYY, $CVC];

  setTimeout(function(){
    typeInInput($email, 'lynnetye@gmail.com');
  }, 0); //500

  setTimeout(function(){
    typeInInput($cardNumber, '4242 4242 4242 4242');
    $visaCC.animate({opacity: '1', left: '270px'}, 800);
  }, 00); //3000

  setTimeout(function(){
    typeInInput($mmYY, '10/16');
  }, 00); //5000

  setTimeout(function(){
    typeInInput($CVC, '123');
  }, 00); //6000

  setTimeout(function(){
    showSlideTwoRightText();
  }, 00); //6500
};

// part III : show right text
function showSlideTwoRightText(){
  $textPartTwo.removeClass('hide');
  $textPartTwo.children().removeClass('hide');
  $textPartTwo.animate({top: '0px', opacity: '1'}, '2s', function(){
    var $checkRememberMe = $('img.check-remember-me-button');

    $checkRememberMe.animate({opacity: '1'}, '.5s', function(){
      storeMobilePhoneNumber();
    });
  });
};

function storeMobilePhoneNumber(){
  var $formBackground = $('img.dribbble-account-background'),
      $mobilePhoneForm = $('.mobile-phone-form'),
      $phoneNumber = $('p.form-phone-number');

  $formBackground.animate({bottom: '0px'}, 500, function(){
    $mobilePhoneForm.animate({opacity: '1'}, 500, function(){
      $phoneNumber.removeClass('hide');
      setTimeout(function(){
        typeInInput($phoneNumber, '(607) 351 - 6384');
      }, 0);

      showSuccessfulSubmit($('.dribbble-example'), 'slide-down');
      setTimeout(function(){ playSlideThree(); }, 3300);
    });
  })
};

function playSlideThree(){
  var $slideTwo = $('article.slide-2'),
      $slideThree = $('article.slide-3'),
      $slideThreeH1 = $slideThree.children('h1'),
      $slideThreeP = $slideThree.children('p');

  $slideTwo.addClass('hide');
  $slideThree.removeClass('hide');
  $slideThreeH1.animate({top: '0px', opacity: '1'}, 1000);
  $slideThreeP.animate({top: '0px', opacity: '1'}, 1000);

  showTextImages();
};

function showTextImages(){
  var $chocolat = $('.chocolat'),
      $feedly = $('.feedly'),
      $patreon = $('.patreon'),
      $listOfImages = [$chocolat, $feedly, $patreon],
      counter = 0;

  var runDisplay = setInterval(function(){
    $listOfImages[counter].animate({top: '310px', opacity: '1'}, 1000);
    counter++;
    if (counter >= $listOfImages.length) {
      clearInterval(runDisplay);
      setTimeout(function(){
        showSuccessfulSubmit($('.chocolat'), 'slide-three-slide-down');
      }, 1000);
      setTimeout(function(){
        showSuccessfulSubmit($('.feedly'), 'slide-three-slide-down');
      }, 1500);
      setTimeout(function(){
        showSuccessfulSubmit($('.patreon'), 'slide-three-slide-down');
        transitionTextToSlideFour();
      }, 2000);
    }
  }, 500);
};

function showSuccessfulSubmit($companyExample, addClassName){
  var $companySubmitAnimation = $companyExample.find('div.submit-form-button-animation'),
      $companySubmissionSuccessful = $companyExample.find('img.submission-successful');

  setTimeout(function(){
    console.log('button clicked');
    $companySubmitAnimation.animate({opacity: '1'}, 500);
  }, 1500);

  setTimeout(function(){
    console.log('show green');
    $companySubmitAnimation.css({'background-position': '0px 37px'});
  }, 2200);

  setTimeout(function(){
    console.log('success!');
    $companySubmissionSuccessful.animate({opacity: '1'}, 200);
  }, 2300);

  setTimeout(function(){
    console.log('make disappear');
    $companyExample.addClass(addClassName);
  }, 2500);

  setTimeout(function(){
    $companyExample.addClass('hide');
  }, 3300);
};

function transitionTextToSlideFour(){
  $('.slide-3 > h1, .slide-3 > p').delay(3000).fadeOut();
  $('.slide-2.part-2').delay(3000).fadeIn();
  setTimeout(function(){
    playSlideFour();
  }, 4000);
};

function playSlideFour(){
  var slideFour = $('.slide-4'),
      slideFourText = $('.slide-4').children(),
      iphoneExample = $('.slide-4 > .slide-4-iphone');

  slideFour.removeClass('hide');
  slideFourText.animate({left: '-50px', opacity: '1'}, 1000);
  $('.slide-2.part-2').fadeOut();
  iphoneExample.removeClass('hide');
  iphoneExample.animate({top: '-130px'}, 500);
};