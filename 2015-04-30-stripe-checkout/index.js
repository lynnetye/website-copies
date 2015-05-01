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

  typeInInput($displayText, text);
});
