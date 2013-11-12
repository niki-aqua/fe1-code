$(function(){
	// alert("here");
	$('.gallery ul').each(function(){
		$(this).css('width', ($(this).find('li').size() * 620 ) + 20 );
		// console.log();
	});
	console.log($('.entry').size() );

});