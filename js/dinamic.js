
var media = $("#media");

$("#mute").click(function(){
	if(media.muted){
		media.muted = false;
		$(media).trigger('play');
		$("#mute").attr("src","img/soundon.png");
	}else {
		media.muted = true;
		$(media).trigger('pause');
		$("#mute").attr("src","img/soundoff.png");
	}
});

$(".mostrar-felicitacion").click(function(){
	$("#comunicado").fadeOut(function(){
		$("title").html("¡Feliz Navidad y próspero Año Nuevo!");
		$("body").attr("class","body");
		$("section").attr("class","section");
		$("#felicitacion").fadeIn();
		$("#wall").css("z-index","-100");
		$("#wall").css("background","#AB0000");
		$("#cot_tl_fixed").css("z-index","1");
		$(media).trigger('play');
	});
});
