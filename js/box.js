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
    box();
  }
}
