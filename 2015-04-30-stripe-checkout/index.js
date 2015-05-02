function typeInInput($input, text){
  var string = '',
      x = 0;

  for (var i = 0; i < text.length; i++){
    setTimeout(function (){
      string = string + text[x];
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
  }, 500); //500

  setTimeout(function(){
    typeInInput($cardNumber, '4242 4242 4242 4242');
    $visaCC.animate({opacity: '1', right: '80px'}, 800);
  }, 3000); //3000

  setTimeout(function(){
    typeInInput($mmYY, '10/16');
  }, 5000); //5000

  setTimeout(function(){
    typeInInput($CVC, '123');
  }, 6000); //6000

  setTimeout(function(){
    showSlideTwoRightText();
  }, 6500); //6500
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
      $phoneNumber = $('p.form-phone-number'),
      $submitFormAnimation = $('div.submit-form-button-animation'),
      $submissionSuccessful = $('img.submission-successful');

  $formBackground.animate({bottom: '0px'}, 500, function(){
    $mobilePhoneForm.animate({opacity: '1'}, 500, function(){
      $phoneNumber.removeClass('hide');
      setTimeout(function(){
        typeInInput($phoneNumber, '(607) 351 - 6384');
      }, 0);

      setTimeout(function(){
        console.log('button clicked');
        $submitFormAnimation.animate({opacity: '1'}, 500);
      }, 1500);

      setTimeout(function(){
        console.log('show green');
        $submitFormAnimation.css({'background-position': '0px 37px'});
      }, 2200);

      setTimeout(function(){
        console.log('success!');
        $submissionSuccessful.animate({opacity: '1'}, 200);
      }, 2300);

    });
  })
};