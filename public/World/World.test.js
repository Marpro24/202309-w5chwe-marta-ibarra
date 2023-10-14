import World from "./World";

describe("Given the method newWorld constructor", () => {
  describe("When it's called with 3 and false", () => {
    test("Then it should return an object with two properties pointing to 3 and false", () => {
      const expectedLength = 3;
      const expectedBoolean = true;

      const grid = new World();
      const values = grid.newWorld(expectedLength, expectedBoolean);

      expect(values.length).toBe(expectedLength);
      expect(values[0][0].isAlive).toBe(expectedBoolean);
    });
  });
  describe("When it's called with with 9 and true", () => {
    test("Then it should return an object with two properties pointing to 9 and false", () => {
      const expectedLength = 9;
      const expectedBoolean = false;

      const grid = new World();
      const values = grid.newWorld(expectedLength, expectedBoolean);

      expect(values.length).toBe(expectedLength);
      expect(values[0][0].isAlive).toBe(expectedBoolean);
    });
  });
});
