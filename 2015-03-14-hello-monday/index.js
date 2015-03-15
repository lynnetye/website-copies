$(document).ready(function(){

hoverText = $(".fourth-layer-with-text");

  $(hoverText).mouseover(function(){
    $(hover-text)
    .animate({ width: "50%", }, 1000 )
    .animate({ height: "50%", }, 1000 )
  });

$("div").click(function() {
  $(this).css({"background-color":"yellow"})
});

}

$(intro).css({ "color":"green", "border":"1px solid black", "visibility":"inherit"});