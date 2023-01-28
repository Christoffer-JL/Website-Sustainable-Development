/* script for accordion to open on click  */
var section = $('li'); 

function toggleAccordion() {
  section.removeClass('active');
  $(this).addClass('active');
}

section.on('click', toggleAccordion);

/* click function for background image opacity */
$("#klimat").click(function(){
    $("#img1").css("opacity", 1);
	$("#img2").css("opacity", 0);
	$("#img3").css("opacity", 0);
	$("#img4").css("opacity", 0);
  });

$("#för").click(function(){
    $("#img1").css("opacity", 0);
	$("#img2").css("opacity", 1);
	$("#img3").css("opacity", 0);
	$("#img4").css("opacity", 0);
})

$("#el").click(function(){
    $("#img1").css("opacity", 0);
	$("#img2").css("opacity", 0);
	$("#img3").css("opacity", 1);
	$("#img4").css("opacity", 0);
})

$("#text").click(function(){
    $("#img1").css("opacity", 0);
	$("#img2").css("opacity", 0);
	$("#img3").css("opacity", 0);
	$("#img4").css("opacity", 1);
})