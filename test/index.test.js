import { Molkky } from "../src/index";

describe("Molkky", () => {
  it("score is zero when starting", () => {
    expect(new Molkky().getScore()).toBe(0);
  });

  it("countQuilles", () => {
    expect(new Molkky().countQuilles("1")).toBe(1);
    expect(new Molkky().countQuilles("1-2-3")).toBe(3);
  });

  it("nextScore 0 quille", () => {
    expect(new Molkky().nextScore(0, "x")).toBe(0);
    expect(new Molkky().nextScore(15, "x")).toBe(15);
  });

  it("nextScore une seule quille", () => {
    expect(new Molkky().nextScore(0, "1")).toBe(1);
    expect(new Molkky().nextScore(20, "5")).toBe(25);
  });

  it("nextScore multiple quilles", () => {
    expect(new Molkky().nextScore(0, "1-2")).toBe(2);
    expect(new Molkky().nextScore(0, "1-5-8")).toBe(3);
    expect(new Molkky().nextScore(3, "1-3-5-9-12")).toBe(8);
  });

  it("nextScore revient à 25 si plus de 50", () => {
    expect(new Molkky().nextScore(49, "2")).toBe(25);
  });

  it("sumScore", () => {
    expect(new Molkky().sumScore(10, 12)).toBe(22);
    expect(new Molkky().sumScore(49, 3)).toBe(25);
    expect(new Molkky().sumScore(49, 1)).toBe(50);
  });

  it("gameScore normal", () => {
    expect(new Molkky().gameScore("12", "1-3", "7")).toBe(21);
    expect(new Molkky().gameScore("12", "12", "12", "12", "3")).toBe(25);
    expect(new Molkky().gameScore("12", "x", "x", "12", "3")).toBe(27);
  });

  it("gameScore win", () => {
    expect(new Molkky().gameScore("12", "12", "12", "12", "2")).toBe("WIN");
  });

  it("gameScore lose", () => {
    expect(new Molkky().gameScore("12", "x", "x", "x")).toBe("LOSE");
  });

  it("isLose", () => {
    expect(new Molkky().isLose("12", "3-5-8", "x", "4")).toBe(false);
    expect(new Molkky().isLose("12", "x", "x", "4")).toBe(false);
    expect(new Molkky().isLose("12", "x", "x", "4", "x", "x")).toBe(false);

    expect(new Molkky().isLose("12", "x", "x", "x")).toBe(true);
  });

  it("next3ThrowsLose", () => {
    expect(new Molkky().next3ThrowsLose(["12", "3-5-8", "x", "4"], 0)).toBe(false);
    expect(new Molkky().next3ThrowsLose(["12", "x", "x", "4"], 1)).toBe(false);
    expect(new Molkky().next3ThrowsLose(["12", "3-5-8", "x", "4"], 1)).toBe(false);

    expect(new Molkky().next3ThrowsLose(["12", "3-5-8", "x", "x", "x"], 2)).toBe(true);
  });
});
