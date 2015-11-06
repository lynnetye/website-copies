// var settings = css.({"align-items": "center", "display": "flex", "flex-direction": "column", "justify-content": "start"})

// var showSignUp = $(".sign-up").children().css.({"align-items": "center", "display": "flex", "flex-direction": "column", "justify-content": "start"});

$(document).ready(function(){
  $("#sign-up-link").on("click", function(event){
    event.preventDefault();
    $(".sign-up").children().css({"align-items": "center", "display": "flex", "flex-direction": "column", "justify-content": "start"});
    $(".login").css({"border": "none"});
    $(".login").children().css({"display": "none"});
  })
})

$(document).ready(function(){
  $("#login-link").on("click", function(event){
    event.preventDefault();
    $(".login").children().css({"align-items": "center", "display": "flex", "flex-direction": "column", "justify-content": "start"});
    $(".sign-up").css({"border":"none"});
    $(".sign-up").children().css({"display": "none"});
  })
})

