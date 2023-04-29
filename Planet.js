class Planet {
  constructor(radius, color_, distance, speed) {
    this.radius = radius;
    this.color_ = color_;
    this.distance = distance;
    this.position = new createVector(distance, 0);
    this.children = [];
    this.speed = speed;
  }
}

function show(planet) {
  push();
  noStroke();
  planet.position.rotate(planet.speed);
  translate(planet.position);
  fill(planet.color_);
  sphere(planet.radius);
  
  for (var i = 0; i < planet.children.length; i++) {
    show(planet.children[i]);
  }
  pop();
}

