$(window).load(function () {
	//Abas Home
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
});

jQuery(document).ready(function() {
    jQuery('.conteudo-aba > ul').jcarousel({
        wrap: 'last'
    });

	//PRECISA DE AJUDA
	$('#sac').mouseover(function(){
		$(this).animate({"right": "0px"}, "slow");
	});
	$('#sac').mouseout(function(){
		$(this).animate({"right": "-182px"}, "slow");
	});

});