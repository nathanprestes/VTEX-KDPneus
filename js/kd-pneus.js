$(window).load(function () {
	//ABAS MARCAS
    //exibe o primeiro place holder
    $('.Tab-Ofertas-especiais .primeira').show();
    //exibe o primeiro botao selecionado
    $('.Tab-Ofertas-especiais ul.itens_abas li:first-child').addClass('ui-tabs-selected');
    $('.Tab-Ofertas-especiais ul.itens_abas li a').click(function () {
        $('.Tab-Ofertas-especiais ul.itens_abas li').removeClass('ui-tabs-selected');
        $(this).parent().addClass('ui-tabs-selected');
        $('.Tab-Ofertas-especiais .conteudo-aba').hide();
        $($(this).attr('href')).fadeIn(350);
        return false
    });
	
	//ARO1314151617181920
    //exibe o primeiro place holder
    $('.Tab-Ofertas-especiais2 .primeira').show();
    //exibe o primeiro botao selecionado
    $('.Tab-Ofertas-especiais2 ul.itens_abas li:first-child').addClass('ui-tabs-selected');
    $('.Tab-Ofertas-especiais2 ul.itens_abas li a').click(function () {
        $('.Tab-Ofertas-especiais2 ul.itens_abas li').removeClass('ui-tabs-selected');
        $(this).parent().addClass('ui-tabs-selected');
        $('.Tab-Ofertas-especiais2 .conteudo-aba2').hide();
        $($(this).attr('href')).fadeIn(350);
        return false
    });
	
});

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

jQuery(document).ready(function() {
	
	if($.browser.msie && parseInt($.browser.version, 10) == 7) {
	  //corrige z-index ie7//
	  $(function() {
	   var zIndexNumber = 1000;
	   $('div').each(function() {
		$(this).css('zIndex', zIndexNumber);
		zIndexNumber -= 10;
	   });
	  });
	 }
	
	
	//CAROS COMPANHEIROS, QUANDO FOREM ALTERAR OU ADICIONAR UMA PROPIEDADE DENTRO DO CAROUSEL VERIFICAR SE ESQUECERAM DE TIRAR A VIRGULA NA ÚLTIMA PROPIEDADE............. ATT,
	
	//MENU ABAS
	jQuery('#mycarousel1').jcarousel({
		scroll: 1,
		wrap: 'circular'
	});	
	
	//SLIDE
	jQuery("#mycarousel").jcarousel({
        scroll: 1,
		auto: 5,
		wrap: 'circular',
        initCallback: mycarousel_initCallback,
        // This tells jCarousel NOT to autobuild prev/next buttons
        buttonNextHTML: null,
        buttonPrevHTML: null
    });
	
	//OFERTAS DO DIA
	jQuery('#mycarousel2.mycarousel2').jcarousel({
		auto: 3,
		scroll: 4,
		wrap: 'last'
	});	
	
	//ARO1314151617181920
	$('.conteudo-aba2 .mycarousel2').addClass('carousel_aros');
	jQuery('.carousel_aros').jcarousel({
        wrap: 'circular'
    });
	
	//ABAS MARCAS
    jQuery('.conteudo-aba ul').jcarousel({
        wrap: 'circular'
    });
	
	//DICAS
	jQuery('#dicas').jcarousel({
		scroll: 1,
		wrap: 'circular'
	});	

	//PRECISA DE AJUDA
	$('#sac').mouseover(function(){
		$(this).animate({"right": "0px"}, "slow");
	});
	$('#sac').mouseout(function(){
		$(this).animate({"right": "-182px"}, "slow");
	});

});