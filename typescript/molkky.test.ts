import { addition } from "./molkky";

describe("Molkky", () => {
  it("doit additionner 2 entiers", () => {
    expect(addition(9, 16)).toBe(25);
  });
});
