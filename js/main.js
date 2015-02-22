/* TODO: bind spacebar to play/pause
*/

// Global Constants
var TICK_PERIOD_MS = 500;
var VIEWPORT_WIDTH = 30;
var SPACE_CODE = 32;

// UI references
var graph;
var slider;
var playPause, reset;

// State variables
var paused = true;
var executionInterval = null;

// Execution Data
var stochValue;
var userGuess = 0;
var profitSeries = [];
var stochValueSeries = [];
var userGuessSeries = [];

/*** Setup functions ***/

function setupControls() {
	playPause = $("#demo1-playPause");
	reset = $("#demo1-reset");
	// Bind space bar to playPause
	$(document).keypress(function(event) {
    	if(event.which==SPACE_CODE) {
    		playPauseClicked();
    		event.preventDefault();
    	}
	});
}

function setupSlider() {
	slider = $('.user-slider').slider({
		min: 0.0, 
		max: 1.0, 
		step: 0.001,
		slide: function(event, ui) { 
    	    userGuess = ui.value; 
    	}
    });

	slider.slider('pips', {  
	    first: '0.0',  
	    last: '1.0',  
	    rest: 'flase',  
	    prefix: "",  
	    suffix: ""  
	});
 
	slider.slider('float', {  
	    handle: true,  
	    pips: true,  
	    prefix: "",  
	    suffix: ""  
	});
}

// Depends on reference to slider having been obtained (via setupSlider)
function setupGraph() {
	graph = $("#demo1-graph");
	graph.width(slider.width()); // Make graph match the slider's width
	plotBlankGraph();
}

/*** Plotting helper function ***/
function plotBlankGraph() {
	var options = { xaxis: { show: false } };
	$.plot(graph, [ [0, 0] ], options);
}

/*** Execution flow control helper functions ***/
function start() {
	if(paused) playPauseClicked();
}

function pause() {
	if(!paused) playPauseClicked();
}

/*** Click listeners ***/

// Toggle button and turn main execution loop on/off
function playPauseClicked() {
	playPause.html(paused ? '<i class="fa fa-pause"></i> Pause' : '<i class="fa fa-play"></i> Resume');
	if(paused) executionInterval = setInterval(function(){mainLoopTick();}, TICK_PERIOD_MS);
	else clearInterval(executionInterval);
	paused = !paused;
}

// Delete all data and pause
function resetClicked() {
	userGuessSeries = [];
	stochValueSeries = [];
	profitSeries = [];
	pause();
	plotBlankGraph();
}

/*** Data generation helper functions ***/
function addDataPoint(series, value) {
	series.push([series.length, value]);
}

function calcProfit(userGuess) {
	return 1 - Math.pow((userGuess-stochValue), 2);
}

/*** Execution Loop ***/
function mainLoopTick() {
	// Get next stochastic value
	stochValue = Math.random();
	// Update data
	addDataPoint(stochValueSeries, stochValue);
	addDataPoint(userGuessSeries, userGuess);
	addDataPoint(profitSeries, calcProfit(userGuess));
	// Calculate graph viewport bounds
	var xmin, xmax;
	if(profitSeries.length > VIEWPORT_WIDTH) {
		xmax = profitSeries.length - 1;
		xmin = profitSeries.length - VIEWPORT_WIDTH;
	}
	else {
		xmin = 0;
		xmax = profitSeries.length - 1;
	}
	var options = {
    	series: {
    	    lines: { show: true },
    	    points: { show: false }
    	}, 
    	xaxis: {
    		show: false,
    		min: xmin,
    		max: xmax
    	}
	};
	var data = [
		{ label: "Profit", data: profitSeries, fill: true, lines: { fill:true } },
		{ label: "Stochastic Value", data: stochValueSeries },
		{ label: "User Guess", data: userGuessSeries }
	]
	$.plot(graph, data, options);
}

/*** Entry point ***/
$(window).load(function() {
	setupControls();
	setupSlider();
	setupGraph();
});