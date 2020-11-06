var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600, 400);

  speed = Math.round(random(55, 90));
  weight = Math.round(random(400, 1500));

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = rgb(80, 80, 80);


}

function draw() {
  background(0);

  if (car.x - wall.x <= car.width/2 + wall.width/2 && wall.x - car.x <= car.width/2 + wall.width/2&& car.y - wall.y <= car.height/2 + wall.height/2 && wall.y - car.y <= car.height/2 + wall.height/2) {
    deformation = (0.5*speed*speed*weight)/22500;
    if (deformation <= 100) {
      car.shapeColor = rgb(0, 255, 0);
    } else if (deformation >= 100 && deformation <= 180) {
      car.shapeColor = rgb(230, 230, 0);
    } else if (deformation > 180) {
      car.shapeColor = rgb(255, 0, 0);
    }
    car.velocityX = 0;
  }

  drawSprites();
}