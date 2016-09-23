function Box() {

  this.radX = 0;
  this.radY = 0;
  this.speed = 1;

  this.rotate = function() {
    this.radX = this.radX + this.speed;
    this.radY = this.radY + this.speed;
  }

  this.show = function() {
    rotateX(radians(this.radX));
    rotateY(radians(this.radY));
    directionalLight(250, 250, 250, -0.0209, -0.62, 0.5);
    ambientMaterial(66, 102, 138);
    box();
  }
}
