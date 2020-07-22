let size_of_screen_y = 720;
let center_of_screen_y = size_of_screen_y/2;
let size_of_screen_x = 1210;
let center_of_screen_x = size_of_screen_x/2;


// Planet size
let scale = 1200;
let mercury_s = 4878 / scale;
let venus_s = 12104 / scale;
let earth_s = 12742 / scale;
let mars_s = 6778 / scale;
let jupiter_s = 139822 / scale;
let saturn_s = 116464 / scale;
let uranus_s = 50724 / scale;
let neptune_s = 49244 / scale;


// Orbit Diameter - The first list of variables are to scale.
/*
// 1. To scale
let scale_d = 0.5;
let mercury_d = 57 * scale_d;
let venus_d = 108 * scale_d;
let earth_d = 149 * scale_d;
let mars_d = 228 * scale_d;
let jupiter_d = 780 * scale_d;
let saturn_d = 1437 * scale_d;
let uranus_d = 2871 * scale_d;
let neptune_d = 4530 * scale_d;
*/
// 2. For illustrative purposes - get all planets in the frame without making some planets super small
let mercury_d = 40;
let venus_d = 80;
let earth_d = 100;
let mars_d = 140;
let jupiter_d = 230;
let saturn_d = 380;
let uranus_d = 460;
let neptune_d = 520;

// Orbit time 
// The numbers are the planets year in earth days.
// The speed variables can be adjusted to change the speed of the illustration.
let speed = 2.5;
let mercury_year = 88 / speed;
let venus_year = 225 / speed;
let earth_year = 365 / speed;
let mars_year = 687 / speed;
let jupiter_year = 4333 / speed;
let saturn_year = 10759 / speed;
let uranus_year = 30687 / speed;
let neptune_year = 60190 / speed; 
 

// Dictionary containing the current degree of rotation for each planet 
let is = {
	'mercury': 0,
	'venus': 0,
	'earth': 0,
	'mars': 0,
	'jupiter': 0,
	'saturn': 0,
	'uranus': 0,
	'neptune': 0
};


// Setup function 
function setup() {
	createCanvas(size_of_screen_x, size_of_screen_y);

}


// Main loop
function draw() {
	background(49);
	noStroke();

	//----
	// Reset degrees to zero when 360 is reached 
	for (var this_planet in is) {
		if (is[this_planet] > 360) {
			is[this_planet] = 0;
		}
	}


	// The sun - not at all to scale 
	fill(255, 153, 0);
	ellipse(center_of_screen_x, center_of_screen_y, 50, 50);


	// ---- Render planets ----
	// Mercury 
	fill(140, 140, 140);
	planet(center_of_screen_x, center_of_screen_y, mercury_s, mercury_d, 0, is['mercury']);

	// Venus
	fill(219, 157, 73);
	planet(center_of_screen_x, center_of_screen_y, venus_s, venus_d, 0, is['venus']);

	// Earth
	fill(40, 162, 240);
	planet(center_of_screen_x, center_of_screen_y, earth_s, earth_d, 0, is['earth']);

	// Mars
	fill(186, 67, 27);
	planet(center_of_screen_x, center_of_screen_y, mars_s, mars_d, 0, is['mars']);

	// Jupiter
	fill(240, 187, 138);
	planet(center_of_screen_x, center_of_screen_y, jupiter_s, jupiter_d, 0, is['jupiter']);

	// Saturn
	fill(189, 100, 69);
	planet(center_of_screen_x, center_of_screen_y, saturn_s, saturn_d, 0, is['saturn']);

	// Uranus
	fill(27, 166, 200);
	planet(center_of_screen_x, center_of_screen_y, uranus_s, uranus_d, 0, is['uranus']);

	// Neptune
	fill(12, 90, 140);
	planet(center_of_screen_x, center_of_screen_y, neptune_s, neptune_d, 0, is['neptune']);		


	// Add degrees depending on the speed of each planet
	is['mercury'] = is['mercury'] + 360 / mercury_year;
	is['venus'] = is['venus'] + 360 / venus_year;
	is['earth'] = is['earth'] + 360 / earth_year;
	is['mars'] = is['mars'] + 360 / mars_year;
	is['jupiter'] = is['jupiter'] + 360 / jupiter_year;
	is['saturn'] = is['saturn'] + 360 / saturn_year;
	is['uranus'] = is['uranus'] + 360 / uranus_year;
	is['neptune'] = is['neptune'] + 360 / neptune_year;

}



// ---- Functions used in main loop (draw)


// converts degrees to radians from top of circle 
function deg_to_rad(degrees) {
	return (degrees - 90 )* PI / 180;
}


// Get x and y for points on a circle based on origin cx and cy and angle a (a is defined in radians) and radius
function points_on_circle(cx, cy, r, a) {
	let x = cx + r * cos(deg_to_rad(a));
	let y = cy + r * sin(deg_to_rad(a));
	return [x, y];
}

// Renders planet 
function planet(center_of_screen_x, center_of_screen_y, diameter, orbit_radius, starting_point, year) {
	coordinates = points_on_circle(center_of_screen_x, center_of_screen_y, orbit_radius, year-starting_point);
	ellipse(coordinates[0], coordinates[1], diameter, diameter);
}




