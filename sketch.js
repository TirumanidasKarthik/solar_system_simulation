var sun;
var mercury;
var venus;
var earth;
var moon;
var mars;
var jupitor;
var saturn;
var uranus;
var neptune;
//var pluto;
function add_moons(planet, n){
  for(var i = 0; i < n; i++){
    var d = random(planet.radius+15, planet.radius+20);
    var s = random(0.1, 0.3);
    planet.children.push(new Planet(2, "white", d, s));
  }
}

function setup() {
  createCanvas(3000, 3000, WEBGL);
  createEasyCam();
  sun = new Planet(200,"orange", 0, 0);
  mercury = new Planet(5.7, "grey", 220, 0.015);
  venus = new Planet(13.5, "gold", 400, 0.011);
  earth = new Planet(15, "blue", 550, 0.01);
  mars = new Planet(7.7, "red", 825, 0.008);
  jupitor = new Planet(90, "brown", 1260, 0.004);
  saturn = new Planet(70, "yellow", 1700, 0.003);
  uranus = new Planet(50, "blue", 2200, 0.002);
  neptune = new Planet(30, "blue", 2500, 0.001);
  //pluto = new Planet(10, "white", 440, 0.01);
  sun.children.push(earth);
  sun.children.push(mercury);
  sun.children.push(venus);
  sun.children.push(mars);
  sun.children.push(jupitor);
  sun.children.push(saturn);
  sun.children.push(uranus);
  sun.children.push(neptune);
  // sun.children.push(pluto);
  add_moons(earth, 1);
  add_moons(mars, 2);
  add_moons(jupitor, 92);
  add_moons(saturn, 83);
  add_moons(uranus, 27);
  add_moons(neptune, 14);
}

function draw() {
  //frameRate(10);
  background(0);
  lights(58, 100, 50);
  
  show(sun);
}