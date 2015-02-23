// Global Constants
var TICK_PERIOD_MS = 1000;
var VIEWPORT_WIDTH = 20;
var SPACE_CODE = 32;

// UI references
var graph;
var slider;
var playPause, reset;
var currentProfitSpan, totalProfitSpan;

// State variables
var paused = true;
var executionInterval = null;

// Execution Data
var stochValue;
var userGuess = 0;
var profitSeries = [];
var stochValueSeries = [];
var userGuessSeries = [];
var currentProfit;
var totalProfit = 0;

/*** Setup functions ***/

function setupScoreboard() {
	currentProfitSpan = $("#demo1-currentProfit");
	totalProfitSpan = $("#demo1-totalProfit");
}

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
	mainLoopTick();
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
	totalProfit = 0;
	pause();
	mainLoopTick(); // plots blank graph
	clearScoreboard();
}

/*** Data generation helper functions ***/
function addDataPoint(series, value) {
	series.push([series.length, value]);
}

function calcProfit() {
	currentProfit = 1 - Math.pow((userGuess-stochValue), 2);
	return currentProfit;
}

/*** UI update functions ***/
// Print current stats, limiting string length to 4 characters
function updateScoreboard() {
	currentProfitSpan.html(currentProfit.toString().substring(0,5));
	totalProfitSpan.html(totalProfit.toString().substring(0,5));
}

function clearScoreboard() {
	currentProfitSpan.html("n/a");
	totalProfitSpan.html("n/a");
}

/*** Execution Loop ***/
function mainLoopTick() {
	// Get next stochastic value
	stochValue = Math.random();
	// Update data
	calcProfit();
	totalProfit += currentProfit;
	addDataPoint(stochValueSeries, stochValue);
	addDataPoint(userGuessSeries, userGuess);
	addDataPoint(profitSeries, currentProfit);
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
    	},
    	yaxis: {
    		min: 0,
    		max: 1
    	}
	};
	var data = [
		{ label: "Profit", data: profitSeries, fill: true, lines: { fill:true } },
		{ label: "Computer Value", data: stochValueSeries },
		{ label: "User Guess", data: userGuessSeries }
	]
	$.plot(graph, data, options);
	updateScoreboard();
}

/*** Entry point ***/
$(window).load(function() {
	setupScoreboard();
	setupControls();
	setupSlider();
	setupGraph();
	clearScoreboard();
});