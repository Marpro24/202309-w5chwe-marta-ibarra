import Cell from "./Cell/Cell.js";
import World from "./World/World.js";

const cell = new Cell(true);
const grid = new World();

grid.newWorld(3, false);

grid.cell[1][1].alive();
grid.cell[2][0].alive();
grid.cell[2][1].alive();

console.log(grid);
console.log(cell);
