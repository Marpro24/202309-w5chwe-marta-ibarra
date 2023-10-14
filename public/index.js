import Cell from "./Cell/Cell.js";
import World from "./World/World.js";

const cell = new Cell(true);
const grid = new World(cell);

grid.newWorld(3, false);

console.log(grid);
console.log(cell);
