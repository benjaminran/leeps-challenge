# leeps-challenge

Programming problem for the UCSC LEEPS Lab Programming position application

## Overview

This project is a web page written in HTML5, CSS, Javascript. It is designed to be mobile-friendly and I tried to keep the code concise and easily maintainable. I organized the page visually with a navigation bar and three main sections: the number-guessing section, an instructions/description section, and a quick "about" section to put the page in context.  On a smaller scale I did things like bind the spacebar to the start/pause button for convenience and hide the mathematical payoff function for users not interested in the complexities behind the demo. I feel these touches are all important in crafting an ideal user experience.


## Acknowledgements
This project uses the following frameworks/libraries:
* jQuery
* jQuery UI
* Bootstrap (3)
  * This project is adapted from [Start Bootstrap](http://startbootstrap.com/)'s [Landing Page](http://startbootstrap.com/template-overviews/landing-page/) template.
    * The template is used in accordance with the its [license](https://github.com/IronSummitMedia/startbootstrap-landing-page/blob/gh-pages/LICENSE).
* Flot
  * This library is used to plot the data in a line graph.
  * More information can be found [here](http://www.flotcharts.org/).
* jQuery UI Slider Pips
  * This project is used to generate, customize, and interact with the slider bar where the user enters their guess.
  * More information can be found [here](https://github.com/simeydotme/jQuery-ui-Slider-Pips).

All images included are used in accordance with their licences.
* The bottom banner image (Autumn leaves) is from [Stocksnap.io](https://stocksnap.io/photo/2751159434) where it was uploaded by Rula Sibai.
  * The image is under a Creative Commons CCO license.


## Features implemented
Taken from the programming problem [specifications](http://leeps.ucsc.edu/misc/page/programming-problems/).

#### Requirements
1. A value that varies stochastically over time, bounded between 0 and 1.
2. A user selected value between 0 and 1.
3. Calculate the user's payoff using the following function: profit = (1 - (UserValue - StochasticValue)<sup>2</sup>)
4. Implement the ability to start, stop and reset the random process.
5. Implement some user interface to select the user value, and see current profit (but default hide stochastic value).
6. Track and show cumulative profits over time.

#### Extras
* Plot time series of user values
* Plot times series of stochastic values.
* Plot current and/or total payoffs.


