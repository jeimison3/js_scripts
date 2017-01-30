function setup(ClassOnClickName){
	if (!(window.jQuery===undefined)){
	SetupCallback(ClassOnClickName);
	}
}
var imagens;
SetupCallback = function(value1){
		$(document).ready(function(){
			
		if(value1!=""){
		imagens = $('.'+value1);
		}else{
		imagens = $('img');
		}
		imagens.each(function(num,elm){
			$(elm).click(function(){
				FormViewImg(this);
			});
		});
		
		});
};

var divImagem;
var ImageFocus = false;
var difAlt=0,difLarg=0;


function FormViewImg(img){
	
	var hideBack = document.createElement( "div" );
	$(hideBack).css("position","absolute");
	$(hideBack).css("background-color","rgba(0,0,0,0.9)");
	$(hideBack).css("width",$(document).width()+"px");
	$(hideBack).css("height",$(document).height()+"px");
	$(hideBack).css("top","0px");
	$(hideBack).css("left","0px");
	
	
	var divImage = document.createElement( "div" );
	
	var alturaImg = (window.innerHeight*0.9);
	var larguraImg = (img.width/img.height)*alturaImg;
	
	difLarg = (window.innerWidth-larguraImg)/2;
	difAlt = (window.innerHeight-alturaImg)/2;
	
	$(divImage).css("position","absolute");
	$(divImage).css("background-color","white");
	$(divImage).css("width",larguraImg+"px");
	$(divImage).css("height",alturaImg+"px");
	//$(divImage).css("height","90%");
	$(divImage).css("top",(difAlt+window.scrollY)+"px");
	$(divImage).css("left",(difLarg+window.scrollX)+"px");
	
	$(hideBack).css("z-index","2147483646");
	$(divImage).css("z-index","2147483647");
	$( "html" ).append( hideBack );
	$( "html" ).append( divImage );
	
	var innerImg = document.createElement( "img" );
	$(innerImg).css("position","absolute");
	$(innerImg).css("width","99%");
	$(innerImg).css("height","99%");
	$(innerImg).css("top","0.5%");
	$(innerImg).css("left","0.5%");
	
	innerImg.src=img.src;
	divImagem=divImage;
	$(divImage).append( innerImg );
	ImageFocus=true;
	$(innerImg).click(function(){
		$(hideBack).remove();
		$(divImage).remove();
		$(innerImg).remove();
	ImageFocus=false;
	});
}

$(window).scroll(function(){
var pY = window.scrollY+difAlt;
var pX = window.scrollX+difLarg;
var pos_top  = $(divImagem).offset().top;
var pos_left = $(divImagem).offset().left;

	$(divImagem).css("top",pY+"px");
	$(divImagem).css("left",pX+"px");

//alert(screen.width+" e "+$(window).width());
});
