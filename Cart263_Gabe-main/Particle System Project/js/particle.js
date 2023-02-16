//followed the Daniel Shiffman tutorial down bellow
// https://youtu.be/CKeyIbT3vXI

//these are the dot thingies that sparkle
class Particle {
  constructor(x, y,z, hu, firework) {
    this.pos = createVector(x, y, z);
    this.firework = firework;
    this.alpha = 255;
    this.hu = hu;
    this.acc = createVector(0, 0);
    if (this.firework) {
      this.vel = createVector(0, random(-12, -8));
    } else {
      this.vel = p5.Vector.random2D();
      this.vel.mult(random(2, 30));
    }
  }

  //gotta go fast
  applyForce(force) {
    this.acc.add(force);
  }

  //woosh, zoom, it flies
  update() {
    if (!this.firework) {
      this.vel.mult(0.9);
      this.alpha -= 4;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  //death
  done() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  }

  show() {
    colorMode(HSB);

    if (!this.firework) {
      strokeWeight(2);
      stroke(this.hu, 255, 255, this.lifespan);
    } else {
      strokeWeight(4);
      stroke(this.hu, 255, 255);
    }

    push();
    rectMode(CENTER);
    noStroke();
    //this makes them SPARKLE, siuuu
    fill(random(0,255), random(0,255), random(0,255), this.alpha);
    translate(this.pos.x, this.pos.y, this.pos.z);
    box(10);
    pop();

    
  }
}