class Cell {
  isAlive;
  neighbour;

  constructor(isAlive) {
    this.isAlive = isAlive;
  }

  state() {
    return this.isAlive;
  }

  die() {
    this.isAlive = false;
  }

  alive() {
    this.isAlive = true;
  }
}

export default Cell;
