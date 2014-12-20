
var media = $("#media");

$("#mute").click(function(){
	if(media.muted){
		media.muted = false;
		media.play();
		$("#mute").attr("src","img/soundon.png");
	}else {
		media.muted = true;
		media.pause();
		$("#mute").attr("src","img/soundoff.png");
	}
});

$("#mostrar-felicitacion").click(function(){
	$("#comunicado").fadeOut(function(){
		$("title").html("¡Feliz Navidad y próspero Año Nuevo!");
		$("body").attr("class","body");
		$("#felicitacion").fadeIn('slow');
	});
});
