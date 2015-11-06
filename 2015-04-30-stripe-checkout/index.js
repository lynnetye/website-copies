function typeInInput($input, text){
  var string = '',
      x = 0;

  for (var i = 0; i < text.length; i++){
    setTimeout(function (){
      string += text[x];
      $input.text(string);
      x++;
    }, 100 * i); //100 * i
  }
};

// SLIDE ONE
var $showMeButton = $('.show-me-button'),
    $articleTitle = $('article.slide-1 > h1'),
    $articleBody = $('article.slide-1 > p'),
    $iPhone = $('.iphone'),
    $dribbbleExample = $('.dribbble-example');

function startDemo() {
  $articleTitle
    .velocity({ translateY: '150px', opacity: '0' }, 500);

  $articleBody
    .velocity({ translateY: '80px', opacity: '0' }, 600);

  $showMeButton
    .velocity({ translateY: '60px', opacity: '0' }, 700);

  $iPhone.velocity({ left: '30%' }, 1000, function () {
    $(this).css({ display: 'none' });

  $dribbbleExample.velocity({ left: '33%', translateY: '50px' }, 800, function () {
    $dribbbleExample.removeClass('right-half').addClass('center-third');
    $articleTitle.addClass('hide');
    $articleBody.addClass('hide');
    $showMeButton.addClass('hide');

      playSlideTwo();
    });
  });
};

// SLIDE TWO
// Three parts: (1) show left text, (2) demo form, (3) show right text

function rotateInText($input) {
  $input.velocity({ opacity: 1, rotateX: '0deg' }, 1000)
};

// PART I : show left text
function playSlideTwo() {
  var $leftSideTitle = $('.slide-2.part-1 > h1'),
      $leftSideBody = $('.slide-2.part-1 > p');

  $leftSideTitle.velocity({ rotateX: '50deg' });
  $leftSideBody.velocity({ rotateX: '50deg' });
  $('.slide-2.part-1').removeClass('hide');

  rotateInText($leftSideTitle);
  rotateInText($leftSideBody);
  fillOutFormDemo();
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
    $email.removeClass('placeholder-form-text');
    typeInInput($email, 'lynnetye@gmail.com');
  }, 1500); //1500

  setTimeout(function(){
    $cardNumber.removeClass('placeholder-form-text');
    typeInInput($cardNumber, '4242 4242 4242 4242');
    $visaCC.velocity({ translateX: '20px', opacity: '1' }, 400);
  }, 3500); //3500

  setTimeout(function(){
    $mmYY.removeClass('placeholder-form-text');
    typeInInput($mmYY, '10/16');
  }, 5500); //5500

  setTimeout(function(){
    $CVC.removeClass('placeholder-form-text');
    typeInInput($CVC, '123');
  }, 6500); //6500

  setTimeout(function(){
    showSlideTwoRightSideText();
  }, 7000); //7000
};

// part III : show right text
function showSlideTwoRightSideText() {
  var $rightSideTitle = $('.slide-2.part-2 > h1'),
      $rightSideBody = $('.slide-2.part-2 > p');

  $rightSideTitle.velocity({ rotateX: '50deg' });
  $rightSideBody.velocity({ rotateX: '50deg' }, 200);
  $('.slide-2.part-2').removeClass('hide');

  rotateInText($rightSideTitle);
  rotateInText($rightSideBody);
  checkRememberMeButton();
};

function checkRememberMeButton(){
  var $checkRememberMe = $('img.check-remember-me-button');

  setTimeout(function() {
    $checkRememberMe.velocity({ opacity: '1' }, 500, function() {
      storeMobilePhoneNumber();
    });
  }, 1000);
};

function storeMobilePhoneNumber() {
  var $formBackground = $('img.dribbble-account-background'),
      $mobilePhoneForm = $('.mobile-phone-form'),
      $phoneNumber = $('p.form-phone-number');

  $formBackground.velocity({translateY: '10px'}, 500);
  $('.dribbble-data').velocity({translateY: '-80px'}, 500);

  $mobilePhoneForm.velocity({ opacity: '1' }, 1000, function() {
    $phoneNumber
      .removeClass('hide');

    typeInInput($phoneNumber, '(607) 351 - 6384');

    showSuccessfulSubmit($('.dribbble-example'), 'slide-down');

    setTimeout(function() {
      playSlideThree();
    }, 3300);
  });
};

function playSlideThree(){
  var $slideTwo = $('article.slide-2'),
      $slideThree = $('article.slide-3'),
      $slideThreeH1 = $slideThree.children('h1'),
      $slideThreeP = $slideThree.children('p');

  $slideTwo.addClass('hide');
  $slideThree.removeClass('hide');
  $slideThreeH1.velocity({ top: '0px', opacity: '1' }, 1000);
  $slideThreeP.velocity({ top: '0px', opacity: '1' }, 1000);

  showTextImages();
};

function showTextImages(){
  var $chocolat = $('.chocolat'),
      $feedly = $('.feedly'),
      $patreon = $('.patreon'),
      $listOfImages = [$chocolat, $feedly, $patreon],
      counter = 0;

  var runDisplay = setInterval(function() {
    $listOfImages[counter].velocity({ translateY: '-265px', opacity: '1' }, 1000);

    counter++;

    if (counter >= $listOfImages.length) {
      clearInterval(runDisplay);

      setTimeout(function() {
        showSuccessfulSubmit($('.chocolat'), 'slide-three-slide-down');
      }, 1000);

      setTimeout(function() {
        showSuccessfulSubmit($('.feedly'), 'slide-three-slide-down');
      }, 1500);

      setTimeout(function() {
        showSuccessfulSubmit($('.patreon'), 'slide-three-slide-down');
        transitionTextToSlideFour();
      }, 2000);
    }
  }, 500);
};

function showSuccessfulSubmit($companyExample, addClassName){
  var $companySubmitAnimation = $companyExample.find('div.submit-form-button-animation'),
      $companySubmissionSuccessful = $companyExample.find('img.submission-successful');

  setTimeout(function() {
    console.log('button clicked');
    $companySubmitAnimation.velocity({opacity: '1'}, 500);
  }, 1500);

  setTimeout(function() {
    console.log('show green');
    $companySubmitAnimation.css({'background-position': '0px 37px'});
  }, 2200);

  setTimeout(function() {
    console.log('success!');
    $companySubmissionSuccessful.velocity({ opacity: '1' }, 200);
  }, 2300);

  setTimeout(function() {
    console.log('make disappear');
    $companyExample.addClass(addClassName);
  }, 2500);

  setTimeout(function() {
    $companyExample.addClass('hide');
  }, 3300);
};

function transitionTextToSlideFour() {
  $('.slide-3 > h1, .slide-3 > p').delay(3000).fadeOut();
  $('.slide-2.part-2').delay(3000).fadeIn();
  setTimeout(function(){
    playSlideFour();
  }, 4000);
};

function playSlideFour(){
  var $slideFour = $('.slide-4'),
      $slideFourText = $('.slide-4').children(),
      $iphoneExample = $('.slide-4 > .slide-4-iphone'),
      $emailForm = $('.humble-bundle-email-input');

  $slideFour.removeClass('hide');
  $slideFourText.velocity({ translateX: '-50px', opacity: 1 }, 1000);
  $('.slide-2.part-2').delay(500).fadeOut();
  $iphoneExample.removeClass('hide');
  $iphoneExample.velocity({ top: '-100px' }, 500);

  setTimeout(function() {
    $emailForm.removeClass('placeholder-form-text');
    typeInInput($emailForm, 'lynnetye@gmail.com');

    playIphoneDemo();
  }, 2000);
};

function playIphoneDemo() {
  var $displayWindow = $('.iphone-display-window'),
      $emailInput = $('.humble-bundle-email-input');

  setTimeout(function() {
    $displayWindow.addClass('iphone-swipe');
    $emailInput.addClass('hide');
  }, 1500);

  setTimeout(function() {
    $displayWindow.css('background-position', '-258px 0px, 0px 0px, 0px 38px');
  }, 2500);
};