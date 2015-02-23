# leeps-challenge

Programming problem for application to UCSC LEEPS Lab Programmer position.

## Overview

This project does a thing.


## Acknowledgements

This project uses the following frameworks/libraries:
* jQuery
* jQuery UI
* Bootstrap (3)
  * This project is adapted from [Start Bootstrap](http://startbootstrap.com/)'s [Landing Page](http://startbootstrap.com/template-overviews/landing-page/) template.
    * The template is used in accordance with the its [license](http://www.apache.org/licenses/LICENSE-2.0).
    * The template uses several more libraries that were not mentioned here for brevity. For more info, see the template documentation.
* Flot
  * This library is used to plot the data in a line graph.
* jQuery UI Slider Pips
  * This project is used to generate, customize, and interact with the slider bar where the user enters their guess.

All images included are used in accordance with their licences.
* The bottom banner image (Autumn leaves) is from [Stocksnap.io](https://stocksnap.io/photo/2751159434) where it was uploaded by Rula Sibai.
  * The image is under a Creative Commons CCO license.

### Thoughts

* Should include clear & concise user instructions (use cookie to only show first time?)
* Data structures to use?
    * int stoch, int uservalue, int profit
        * all between 0 and 1
* Graph of data
    * Main graph: cumulative profit
    * Secondary graph: user selected and stochastic values
* Color Scheme
    * ~Academic, so primarily black/white
    * Accent color: Dark blue? + Banana slug yellow? Blue shadow (+?)?
        * Deep UCSC yellow: #f1b324
* Overall Layout
    * tabs for part 1 and part 2 with main app at top of content description below
    * + more modern sections on single page with right-aligned app 1 and left description 1, then left-aligned app 2 and right description 2
        * could include leading panel with paragraphs about me and challenge


### Requirements

1. A value that varies stochastically over time, bounded between 0 and 1.
    1. Math.random()
2. A user selected value between 0 and 1.
    2. slider and text box, display result in box if used slider, allow typing directly
3. Calculate the user's payoff using the following function: profit = (1 - (UserValue - StochasticValue)<sup>2</sup>)
4. Implement the ability to start, stop and reset the random process.
    3. font-awesome icons
5. Implement some user interface to select the user value, and see current profit (but default hide stochastic value).
    4. animate current profit?
6. Track and show cumulative profits over time.
    5. keep track of cumulative profits with int: [0, infinity)
        1. hot-cold w/ subtle red/blue?
    6. use flot to make graph


### Extras

* Plot time series of user values
    * secondary graph
* Plot times series of stochastic values.
* Plot current and/or total payoffs.
* Show hide current stochastic value
* Add a text area to allow the user to change the payoff function.
## 2. Particle Simulation (Optional)
### Requirements
1. Canvas element with particles
2. Particles move in random direction with some velocity
3. Particles collide with canvas "walls" and bounce back
4. Alternatively, canvas wraps around (e.g. Pacman)
5. Ability to add more particles with mouse
6. Ability to reset simulation


### Extras

* Particles collide with each other
* Particles change color
* Particles leave "trail"
