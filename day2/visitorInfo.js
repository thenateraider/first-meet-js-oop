class Visitor {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }
  moveLeft() {
    if (this.position > 0) {
      this.position -= 1;
      return `${this.name} walks to the Left....`;
    }
    else {
      return `${this.name} is already at the Entrance.`;
    }
  }
  moveRight(maximumEnd) {
    if (this.position < maximumEnd) {
      this.position += 1;
      return `${this.name} walks to the Right....`;
    }
    else {
      return `${this.name} is already at the end of the Zoo Path.`;
    }
  }
}
const visitors = new Visitor("Nate");

export default{
    visitors
}