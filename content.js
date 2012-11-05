console.log("Loading Beast…");

$('div.vipboxads')
	.html("<h1 style=\"color:white\">Beast Mode Activated</h1>");

$('div.vipboxads').next('.black').children().each(function(){

	if ($(this).css('position')!=='relative'){
		console.log("MUNCH");
		$(this).remove();
	}
});
$('div.black>table').remove();
$('.floater,#ad_overlay,#pageshare,#vipchat,#nochat').hide();
$('#lightsOff').parents('.black').remove();