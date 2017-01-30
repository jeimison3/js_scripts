function ouvinteOk(dados){
	 //alert(dados);
	 $("#view").html(dados);
	 findValores();
  //console.log(dados);
}

function findValores(){
	$(".card-product-url").each(function(indx,elem){
		var produt = elem;//card-product-details
					
		var nome = elem.getAttribute("title");//card-product-name
		//alert(nome);
		//alert(produt.children[0].getAttribute("class")+" e "+produt.children[1].getAttribute("class"));
		var preco = produt.children[1].children[3].//card-product-details
						children[0].//card-product-prices
						children[1].//card-product-price text-highlight-1
						children[1].getAttribute("content");//value
						
		//alert(elem.children[1].getAttribute("content"));
		console.log(preco+"~ > "+nome);
	});
	/*
	$(".card-product-price.text-highlight-1").each(function(indx,elem){
	
		//alert(elem.children[1].getAttribute("content"));
		console.log(elem.children[1].getAttribute("content"));
	});
	*/
}
function procurar(link){

    $.ajax({
        url: "../webfind.php?l="+link,
	type: "GET",
        success: function(dat){
			ouvinteOk(dat);
		},
		error:function(a,b,c){
			alert("Deu treta...\n"+a.statusText);
		}
    });
	
	
}
function procurarSeq(){
	var keywd = "notebook core i3";
 procurar("http://www.americanas.com.br/busca/?conteudo="+keywd+"&limite=30&offset=1");
 
 
 }