//CAROS COMPANHEIROS, QUANDO FOREM ALTERAR OU ADICIONAR UMA PROPIEDADE DENTRO DO CAROUSEL VERIFICAR SE ESQUECERAM DE TIRAR A VIRGULA NA ÚLTIMA PROPIEDADE............. ATT,
function mycarousel_initCallback(carousel) {
    jQuery('.jcarousel-control a').bind('click', function() {
        carousel.scroll(jQuery.jcarousel.intval(jQuery(this).text()));
        return false;
    });

    jQuery('.jcarousel-scroll select').bind('change', function() {
        carousel.options.scroll = jQuery.jcarousel.intval(this.options[this.selectedIndex].value);
        return false;
    });

    jQuery('#mycarousel-next').bind('click', function() {
        carousel.next();
        return false;
    });

    jQuery('#mycarousel-prev').bind('click', function() {
        carousel.prev();
        return false;
    });
};

// Ride the carousel...
jQuery(document).ready(function() {
    jQuery("#mycarousel").jcarousel({
        scroll: 1,
		auto: 5,
		wrap: 'circular',
        initCallback: mycarousel_initCallback,
        // This tells jCarousel NOT to autobuild prev/next buttons
        buttonNextHTML: null,
        buttonPrevHTML: null
    });

    jQuery('.mycarousel2').jcarousel({
		auto: 0,
		scroll: 4
	});
	
    jQuery('#mycarousel1').jcarousel({
		scroll: 1,
		wrap: 'last'
	});

	jQuery('#dicas').jcarousel({
		scroll: 1
	});
	
	
	//CAROUSEL DE MARCAS 	
	mcarousel = $("#carousel_marcas2").msCarousel({boxClass:'div.marca', height:350, width:980, vertical:true}).data("msCarousel");
	//add click event
	$("#carousel_marcas2 #next").click(function() {
		mcarousel.next();
	});
	$("#carousel_marcas2 #prev").click(function() {
		mcarousel.previous();
	});	 

	$(".produtos_marcas").jCarouselLite({
		btnNext: ".passa",
		btnPrev: ".volta",
		visible: 3,
		scroll: 1
	}); 

	$('.item ul').css('left','0');


	//SCRIPT PARA ABAS DE AROS NA HOME
	$('#navegador .primeiro').click(function(){
		$('#navegador a').removeClass('ativo');
		$(this).addClass('ativo');
		$('#aro13, #aro14, #aro15, #aro16, #aro17, #aro18, #aro19, #aro20').hide();
		$('#aro13').show();
	});

	$('#navegador .segundo').click(function(){
		$('#navegador a').removeClass('ativo');
		$(this).addClass('ativo');
		$('#aro13, #aro14, #aro15, #aro16, #aro17, #aro18, #aro19, #aro20').hide();
		$('#aro14').show();
	});

	$('#navegador .terceito').click(function(){
		$('#navegador a').removeClass('ativo');
		$(this).addClass('ativo');
		$('#aro13, #aro14, #aro15, #aro16, #aro17, #aro18, #aro19, #aro20').hide();
		$('#aro15').show();
	});

	$('#navegador .quarto').click(function(){
		$('#navegador a').removeClass('ativo');
		$(this).addClass('ativo');
		$('#aro13, #aro14, #aro15, #aro16, #aro17, #aro18, #aro19, #aro20').hide();
		$('#aro16').show();
	});

	$('#navegador .quinto').click(function(){
		$('#navegador a').removeClass('ativo');
		$(this).addClass('ativo');
		$('#aro13, #aro14, #aro15, #aro16, #aro17, #aro18, #aro19, #aro20').hide();
		$('#aro17').show();
	});

	$('#navegador .sexto').click(function(){
		$('#navegador a').removeClass('ativo');
		$(this).addClass('ativo');
		$('#aro13, #aro14, #aro15, #aro16, #aro17, #aro18, #aro19, #aro20').hide();
		$('#aro18').show();
	});

	$('#navegador .setimo').click(function(){
		$('#navegador a').removeClass('ativo');
		$(this).addClass('ativo');
		$('#aro13, #aro14, #aro15, #aro16, #aro17, #aro18, #aro19, #aro20').hide();
		$('#aro19').show();
	});

	$('#navegador .oitavo').click(function(){
		$('#navegador a').removeClass('ativo');
		$(this).addClass('ativo');
		$('#aro13, #aro14, #aro15, #aro16, #aro17, #aro18, #aro19, #aro20').hide();
		$('#aro20').show();
	});


	//PRECISA DE AJUDA
	$('#sac').mouseover(function(){
		$(this).animate({"right": "0px"}, "slow");
	});
	$('#sac').mouseout(function(){
		$(this).animate({"right": "-182px"}, "slow");
	});

});