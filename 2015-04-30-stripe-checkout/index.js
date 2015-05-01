$(document).ready(function(){
  var text = "This is a test string.",
      $displayText = $('.text-box');

  function typeInInput($input, text){
    var string = '',
        x = 0;

    for (var i = 0; i < text.length; i++){
      setTimeout(function (){
        string = string + text[x];
        $input.val(string);
        x++;
      }, 500 * i);
    }
  };

  // start typing demo
  typeInInput($displayText, text);
});

var $showMeButton = $('.show-me-button'),
    $articleTitle = $('article > h1'),
    $articleBody = $('article > p'),
    $iPhone = $('.iphone'),
    $dribbbleExample = $('.dribbble-example');

function startDemo(){
  console.log("called function");
  $articleTitle.animate({top: '150px', opacity: '0'}, '1000');
  $articleBody.animate({top: '100px', opacity: '0'}, '1200');
  $showMeButton.animate({top: '80px', opacity: '0'}, '1500');
  $iPhone.animate({left: '150px'}, '1500', function(){
    $(this).animate({display: 'none'})
    $dribbbleExample.animate({right: '200px'}, '10000');
  });


};