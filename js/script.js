// event pada saat link di klik
$('.page-scroll').on('click', function(e) {
	

	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen yang bersangkutan
	var elemenTujuan = $(tujuan);
	
	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1250, 'easeInOutCirc');

	e.preventDefault();

});


// parallax
// about
$ (window).on('load', function() {
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
})

// saat di scroll
$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	// jumbotron
	$('html .jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4.5 +'%)'
	});

	$('html .jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('html .jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});

	// portfolio
	if( wScroll > $('.portfolio').offset().top - 250) {
		$('.portfolio .thumbnail').each(function(i){
			setTimeout(function() {
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});


	}
});