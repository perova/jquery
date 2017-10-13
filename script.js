console.log('App loaded.. ')
$(document).ready(function(){

//tiesiog sakom pagal id, ar taga , kai click, tai p dingsta (hide)
// $("#top_menu.link").click(function){
// 	$("p").hide();
// }

$( window ).scroll(function() {
  $( "#div1" ).fadeIn();
  $("#div2").fadeIn(1000);
   $("#div3").fadeIn(3000);	
   $("#button").fadeIn(5000);
});

$("button").click(function(){
	$("#div1").fadeOut(3000);
    $("#div2").fadeOut("slow");
    $("#div3").fadeOut();	
       
});

$( "#row_1" ).children().click(function(){
$( this ).fadeOut();

  // .css( "text-decoration", "underline" )
  // .hover(function() {
  //   $( this ).addClass( "sogreen" );
  // }, function() {
  //   $( this ).removeClass( "sogreen" );
  });
$("#row_2").children().click(function(){

$(this).siblings().css({"background-color": "red"});

});


$( "#row_3" ).find("button").click(function(){
	$(this).parent().fadeOut("slow");
});

$( "#row_4" ).click(function(){
$( this ).fadeOut();
});

});




//trumpesnis apsirasymas 
// (function(){





// } );

// visus kitus kur nebuvo paspausta

// kai dive divas, kad isnyktu tame dive esantys divai

// paspaudus vidini, parent


// this
// siblings
// child
// parent
