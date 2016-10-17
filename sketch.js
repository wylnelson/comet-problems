var asteroids = [];



function setup() {
  createCanvas(600, 600);
  for (var i = 0; i < 20; i++) {
    asteroids[i] = new Asteroid();
  }

}

function draw() {
  for (var i = 0; i < asteroids.length; i++) {
  background(0);
  asteroids[i].display();
  }


}

 function Asteroid() {
      this.x = 300,
      this.y = 300,
      this.r = random(100,270),
      this.speed = random(-5,5),
      this.rad1 = random(0,360),
      this.radius = random(20,50),
      this.cc = random(50,200),
      
      this.display = function() {
        fill(this.cc);
        ellipse(this.x + this.r * cos(radians(this.rad1)), this.y + this.r * sin(radians(this.rad1)), this.radius); //code inspired by Rodger
        this.rad1 += this.speed;
      }
    }






 /* function ship() {
    display= function(){
      fill(200);
      rect(this.x,this.y,30,45);
    }
    move= function(){
      if (keyIsDown(UP_ARROW)){
       this.y += 1 ;
      }
      if (keyIsDown(DOWN_ARROW)){
        this.y -= 1;
      }
    }
  collide= function(Asteroid) {
    var collide = dist(this.x, this.y, Asteroid.x, Asteroid.y);
    
    if (collide = 0) {
      text("YOU FAILED TO", 270, 270);
      text("NAVIGATE THE ASTEROIDS", 250, 300);
      delay(10000);
      
    }
  }
   
   
 }
  
   */
 
  
  
  
  
 