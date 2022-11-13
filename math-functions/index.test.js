import { add, subtract, multiply, divide } from "./index.js";

describe("add()", () => {
  it("should return 5 if called with add(2, 3)", () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });
  it("returns a negative value if the greater argument is negative", () => {
    const result = add(3, -5);
    expect(result).toBeLessThan(0);
  });
  it("returns a value close to 0.3 if called with add(0.1, 0.2)", () => {
    const result = add(0.1, 0.2);
    expect(result).toBeCloseTo(0.3);
  });
});

describe("subtract()", () => {
  it("returns 10 if called with subtract(15, 5)", () => {
    expect(subtract(15, 5)).toBe(10);
  });
  it("returns a negative value if the second argument is greater than the first one", () => {
    expect(subtract(2, 10)).toBeLessThan(0);
  });
});

describe("multiply()", () => {
  it("returns 8 if called with multiply(2, 4)", () => {
    expect(multiply(2, 4)).toBe(8);
  });
  it("returns a negative value if only the first argument is negative", () => {
    expect(multiply(-3, 7)).toBeLessThan(0);
  });
  it("returns a negative value if only the second argument is negative", () => {
    expect(multiply(3, -7)).toBeLessThan(0);
  });
  it("returns a positive value if called with two negative arguments", () => {
    expect(multiply(-3, -7)).toBeGreaterThan(0);
  });
});

describe("divide()", () => {
  it("returns 3 if called with divide(9, 3)", () => {
    expect(divide(9, 3)).toBe(3);
  });
  it('returns "You should not do this!" if called with 0 as second argument', () => {
    expect(divide(3, 0)).toBe("You should not do this!");
  });
});
