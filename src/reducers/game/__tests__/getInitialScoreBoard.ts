import { getInitialScoreBoard } from "../getInitialScoreBoard";

describe("getInitialScoreBoard", () => {
  it("should work correctly", () => {
    expect(getInitialScoreBoard()).toEqual({ 'red': 0, 'yellow': 0 });
  });
});
