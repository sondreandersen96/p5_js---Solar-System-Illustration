# p5.js Solar System Illustration
*Solar System Illustration using p5.js*

This repository uses the p5.js package in JavaScript to create an illustration of the plantes in our solar system. Note that this is not a simulation but rather an illustration. That means that the planets orbits are not based on orbital mechanics but rather circular motions rendered at speeds that replicate the avarege speed of the reel planets orbits but speed up a lot, i.e. the plantes' orbits are somewhat realistic relative to each other. 

Also, the size of the planets are to scale, however, the sun is not at all to scale. This decision was made because the sun is supermassive compared to the other planets, which would render them almost invisible. 

The planets orbits are not to scale either, however, some code could be commented out in order to make the orbits more realistic, however, that does result in either only the inner four planets being visible, or these planets being really really tiny (by tweacking some scaling parameters in the code). So, to illustrate the solar system hereby the relative size and relative speed of the plantes, the orbital radiuses are not realistic. 

## How was this p5.js sketch made? 
This is really a very simple program that was created on the second day after I first started programming in p5.js (although I had some previous JavaScript experience). The key element to make this program work is to program the circular orbits. The parametric equation of a circle is crucial to this program (this page explains it well: https://www.mathopenref.com/coordparamcircle.html). The equation describes all the points on a circle given the circle's *radius, r* and the chosen *radian* of the circle, as well as the *origin* (x, y)of the circle. A radian is simply an alternative to using degrees to describe areas of the the circle. The parametric equation of a circle takes radians as input, but degrees can easially be converted to radians using this JavaScript function: 

'''javascript
function deg_to_rad(degrees) {
	return (degrees - 90 )* PI / 180;
}
'''
