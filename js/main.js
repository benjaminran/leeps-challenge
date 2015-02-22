function setupSlider() {
	// First of all attach a slider to an element. If you want to customize the range of values, you do it in the initialization.
	$('.user-slider').slider({min: 0.0, max: 1.0, step: 0.001});

	// Then you can give it pips and labels!  
	$('.user-slider').slider('pips', {  
	    first: '0.0',  
	    last: '1.0',  
	    rest: 'flase',  
	    prefix: "",  
	    suffix: ""  
	});

	// And finally can add floaty numbers (if desired)  
	$('.user-slider').slider('float', {  
	    handle: true,  
	    pips: true,  
	    prefix: "",  
	    suffix: ""  
	});
}

$(window).load(function() {
	$.plot($("#placeholder"), [ [[0, 0], [1, 1]] ], { yaxis: { max: 1 } });
	setupSlider();
});