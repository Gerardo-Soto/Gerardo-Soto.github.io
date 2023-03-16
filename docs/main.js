$(document).ready(function(){
	// Creación de un objeto para las variables:
	var banner = {//objeto banner
		padre: $('#banner'), // atributo padre
		numero_Slides: $('#banner').children('.slide').length, 
		posicion: 1
	}

	banner.padre.children('.slide').first().css({
		'left': 0
	});
	// ******  DISEÑO RESPONSIVE  CON JS *******
	// calcular la altura del banner para la imagen
	var altoBanner = function(){
		var alto = banner.padre.children('.slide').outerHeight();
		banner.padre.animate({
			'height': alto + 'px'
		})
	}
	// Ejecutamos la funcion al cargar la pagina para calcular el tamaño
	altoBanner();
	//altoInfo();
	// Configurar el comportamiento resonsivo de las marquees

	// Ejecutamos la funcion cuando se cambie el tamaño de la ventana
	$(window).resize(function(){
		altoBanner();
	});
	
	// Botones para los sliders
	$('#banner').children('.slide').each(function(){
		$('#botones').append('<span>');
	});

	$('#botones').children('span').first().addClass('active');
	
	// DISEÑO del Banner

	// Boton siguiente
	$('#banner-next').on('click', function(e){
		e.preventDefault();//no coloca # en la url
		if(banner.posicion < banner.numero_Slides){
			banner.padre.children().not('.active').css({
				'left': '100%'
			});
			$('#banner .active').removeClass('active').next().addClass('active').animate({
				'left': '0'
			});
			$('#banner .active').prev().animate({
				'left': '-100%'
			});
			$('#banner .active').prev().css({
				'left': '200%'
			});
			$('#botones').children('.active').removeClass('active').next().addClass('active');
			banner.posicion = banner.posicion + 1;
		}
		else{
			$('#banner .active').animate({
				'left': '-100%'
			});
			banner.padre.children().not('.active').css({
				'left': '100%'
			});

			$('#banner .active').removeClass('active');
			banner.padre.children('.slide').first().addClass('active').animate({
				'left': '0'
			});
			$('#botones').children('.active').removeClass('active');
			$('#botones').children('span').first().addClass('active');
			banner.posicion = 1;
		}
		altoBanner();
	});
	// Boton anterior
	$('#banner-prev').on('click', function(e){
		e.preventDefault();// no coloca el # en la  url
		if (banner.posicion > 1) {
			//Movemos primero a la izquierda
			banner.padre.children().not('.active').css({
				'left': '-100%'
			});
			$('#banner .active').animate({
				'left': '100%'
			});
			$('#banner .active').removeClass('active').prev().addClass('active').animate({
				'left': '0'
			});
			$('#botones').children('.active').removeClass('active').prev().addClass('active');
			banner.posicion = banner.posicion - 1;
		}
		else{
			$('#banner .active').animate({
				// Desplaza a la derecha
				'left': '100%'
			});
			
			banner.padre.children().not('active').css({
				// Tosos empiezan desde la izquierda
				'left': '-100%'
			});
			$('#banner .active').removeClass('active');
			banner.padre.children().last().addClass('active').animate({
				'left': '0'
			});
			$('#botones').children('.active').removeClass('active');
			$('#botones').children('span').last().addClass('active');
			banner.posicion = banner.numero_Slides;
		}
		altoBanner();
	})
});