
//followed the Daniel Shiffman tutorial down bellow
// https://youtu.be/CKeyIbT3vXI

//gave the firework spawn a Z axis
class Firework {
  constructor() {
    this.hu = random(1000);
    this.firework = new Particle(random(-width, width), height-800, random(-200, 200), this.hu, true);
    this.exploded = false;
    this.particles = [];
  }

  //check for boom
  done() {
    if (this.exploded && this.particles.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  //make firework go woosh
  update() {
    if (!this.exploded) {
      this.firework.applyForce(gravity);
      this.firework.update();

      if (this.firework.vel.y >= 0) {
        this.exploded = true;
        this.explode();
      }
    }

    //gravity go brrrr
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();

      if (this.particles[i].done()) {
        this.particles.splice(i, 1);
      }
    }
  }

  //big boom no more
  explode() {
    for (let i = 0; i < 100; i++) {
      const p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, false);
      this.particles.push(p);
    }
  }

  //idk it starts killing itself with the 3d I threw in, not good enough to figure it out, refresh every 40 seconds.
  show() {
    if (!this.exploded) {
      this.firework.show();
    }

    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }
  }
}