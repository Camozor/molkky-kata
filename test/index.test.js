import { Molkky } from "../src/index";

describe("Molkky", () => {
  it("score is zero when starting", () => {
    const party = new Molkky();
    expect(party.getScore()).toBe(0);
  });
});
